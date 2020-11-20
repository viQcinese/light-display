import React, { useCallback, useState } from 'react';

import { GlobalStyle, Content } from './styles';

import MainController from './components/MainController';

import Display from './components/Display';

const App: React.FC = () => {
  const [isOn, setIsOn] = useState(true);
  const [speed, setSpeed] = useState(25);
  const [intensity, setIntensity] = useState(100);
  const [rows, setRows] = useState(2);

  const handleChangeLightColor = useCallback(e => {
    const lightNumber = e.target.parentElement.id.split('lc')[1];
    const light = document.querySelector(`#n${lightNumber}`) as any;

    if (!light) return;

    if (!light.style.background || light.style.background === 'red') {
      light.style.background = 'green';
      light.style.color = 'green';
    } else if (light.style.background === 'green') {
      light.style.background = 'orange';
      light.style.color = 'orange';
    } else if (light.style.background === 'orange') {
      light.style.background = 'blue';
      light.style.color = 'blue';
    } else if (light.style.background === 'blue') {
      light.style.background = 'yellow';
      light.style.color = 'yellow';
    } else if (light.style.background === 'yellow') {
      light.style.background = 'purple';
      light.style.color = 'purple';
    } else if (light.style.background === 'purple') {
      light.style.background = 'red';
      light.style.color = 'red';
    }
  }, []);

  const handleSpeedChange = useCallback(e => {
    setIsOn(false);
    setIsOn(true);
    setSpeed(Number(e.target.value));
  }, []);

  const handleIntensityChage = useCallback(e => {
    setIsOn(false);
    setIsOn(true);
    setIntensity(Number(e.target.value));
  }, []);

  const handleSetNumberOfRows = useCallback(e => {
    setIsOn(false);
    setRows(Number(e.target.id.split('rb')[1]));
    setIsOn(true);
  }, []);

  const handleChangeSize = useCallback(e => {
    const value = e.target.value / 50;
    const lightNumber = e.target.parentElement.id.split('lc')[1];
    const light = document.querySelector(`#n${lightNumber}`) as any;

    if (!light) return;

    light.style.transform = `scale(${value})`;
  }, []);

  const handleSetIsOn = useCallback(() => {
    setIsOn(!isOn);
  }, [isOn]);

  return (
    <>
      <GlobalStyle />
      <Content>
        <MainController
          handleChangeLightColor={handleChangeLightColor}
          handleSpeedChange={handleSpeedChange}
          handleIntensityChange={handleIntensityChage}
          handleSetNumberOfRows={handleSetNumberOfRows}
          handleChangeSize={handleChangeSize}
          handleSetIsOn={handleSetIsOn}
          intensity={intensity}
          rows={rows}
          speed={speed}
        />
        <Display
          isOn={isOn}
          speed={501 - speed * 10}
          intensity={intensity}
          rows={rows}
        />
      </Content>
    </>
  );
};

export default App;
