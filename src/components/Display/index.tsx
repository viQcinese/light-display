import React, { useCallback, useEffect, useState } from 'react';

import { Container, Light } from './styles';

interface IDisplayProps {
  isOn: boolean;
  speed: number;
  intensity: number;
  rows: number;
  displayStyle: boolean;
}

const Display: React.FC<IDisplayProps> = ({
  isOn,
  speed,
  intensity,
  rows,
  displayStyle,
}) => {
  const [timers, setTimer] = useState([]) as any;
  const [lightsArray, setLightsArray] = useState(() => {
    const lights = [];
    for (let i = 1; i <= rows * 7; i++) {
      lights.push(i);
    }
    return lights;
  });
  const [lightingFunction, setLightingFunction] = useState(0);

  // Turn Lights ON in sequence
  const handleTurnOnLight1 = useCallback(
    (i = 1): any => {
      const currentLight = document.querySelector(`#n${i}`) as any;

      if (!currentLight) return handleTurnOnLight1();

      currentLight.style.opacity = intensity / 100;
      currentLight.style.boxShadow = '0 0 20px 5px';

      const timer = setTimeout(() => {
        currentLight.style.opacity = 0.2;
        currentLight.style.boxShadow = '0 0 0 0';
        handleTurnOnLight1(i + 1);
      }, speed);

      setTimer((old: number[]) => [...old, timer]);
    },
    [setTimer, speed, intensity],
  );

  // Turn Lights ON in parallel
  const handleTurnOnLight2 = useCallback(
    (i = 1): any => {
      for (let j = 1; j <= rows * 7; j++) {
        const currentLight = document.querySelector(`#n${j}`) as any;
        if (j % 2 === i && currentLight) {
          currentLight.style.opacity = intensity / 100;
          currentLight.style.boxShadow = '0 0 20px 5px';
        }
      }

      const timer = setTimeout(() => {
        for (let j = 1; j <= rows * 7; j++) {
          const currentLight = document.querySelector(`#n${j}`) as any;
          if (j % 2 === i && currentLight) {
            currentLight.style.opacity = 0.2;
            currentLight.style.boxShadow = '0 0 0 0';
          }
        }

        if (i === 0) handleTurnOnLight2(1);
        if (i === 1) handleTurnOnLight2(0);
      }, speed);

      setTimer((old: number[]) => [...old, timer]);
    },
    [intensity, rows, setTimer, speed],
  );

  // // Set Lighting Function
  // const handleTurnOnLight = handleTurnOnLight2;

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
      if (displayStyle) handleTurnOnLight1();
      else handleTurnOnLight2();
    }
  }, [isOn, displayStyle, handleTurnOnLight1, handleTurnOnLight2]);

  // Keep Track of Speed Changes
  useEffect(() => {
    handleTurnOffLights();
    clearTimer();
    if (displayStyle) handleTurnOnLight1();
    else handleTurnOnLight2();
  }, [
    speed,
    displayStyle,
    handleTurnOnLight1,
    handleTurnOnLight2,
    handleTurnOffLights,
  ]);

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
