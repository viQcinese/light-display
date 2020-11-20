import React, { useCallback, useEffect, useState } from 'react';

import { Container, Light } from './styles';

interface IDisplayProps {
  isOn: boolean;
  speed: number;
  intensity: number;
  rows: number;
}

const Display: React.FC<IDisplayProps> = ({ isOn, speed, intensity, rows }) => {
  const [timers, setTimer] = useState([]) as any;
  const [lightsArray, setLightsArray] = useState(() => {
    const lights = [];
    for (let i = 1; i <= rows * 7; i++) {
      lights.push(i);
    }
    return lights;
  });

  // Turn Lights On
  const handleTurnOnLight = useCallback(
    (i = 1): any => {
      const currentLight = document.querySelector(`#n${i}`) as any;

      if (!currentLight) return handleTurnOnLight();

      currentLight.style.opacity = intensity / 100;
      currentLight.style.boxShadow = '0 0 20px 5px';

      const timer = setTimeout(() => {
        currentLight.style.opacity = 0.2;
        currentLight.style.boxShadow = '0 0 0 0';
        handleTurnOnLight(i + 1);
      }, speed);

      setTimer((old: number[]) => [...old, timer]);
    },
    [setTimer, speed, intensity],
  );

  // Turn Lights Off
  const handleTurnOffLights = useCallback(() => {
    for (let i = 1; i <= rows * 7; i++) {
      const currentLight = document.querySelector(`#n${i}`) as any;
      if (currentLight) {
        currentLight.style.opacity = 0.2;
      }
    }
  }, [rows]);

  // Clear Timer
  const clearTimer = useCallback(() => {
    timers.forEach((i: number) => clearTimeout(i));
  }, [timers]);

  // Keep Track of Lights Off
  useEffect(() => {
    if (!isOn) {
      clearTimer();
      handleTurnOffLights();
    }
  }, [isOn, timers, handleTurnOffLights, clearTimer, speed]);

  // Keep Track of Lights On
  useEffect(() => {
    if (isOn) {
      handleTurnOnLight();
    }
  }, [isOn, handleTurnOnLight]);

  // Keep Track of Speed Changes
  useEffect(() => {
    handleTurnOffLights();
    clearTimer();
    handleTurnOnLight();
  }, [speed, handleTurnOnLight, handleTurnOffLights]);

  // Keep Track of Rows
  useEffect(() => {
    const la = [];
    for (let i = 1; i <= rows * 7; i++) {
      la.push(i);
    }
    setLightsArray(la);
  }, [rows]);

  return (
    <Container>
      {lightsArray.map(e => (
        <Light key={e} id={`n${e}`} />
      ))}
    </Container>
  );
};

export default Display;
