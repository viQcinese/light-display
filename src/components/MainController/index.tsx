import React from 'react';

import {
  Container,
  UpperButtonsContainer,
  LowerButtonsContainer,
  SlidersContainer,
  IntensitySlider,
  SpeedSlider,
  PlayButton,
  DisplayStyleButton,
} from './styles';

import LightController from './components/LightController';
import RowsButton from './components/RowsButton';

interface IMainControllerProps {
  handleSetNumberOfRows: (e: any) => void;
  handleChangeLightColor: (e: any) => void;
  handleChangeSize: (e: any) => void;
  handleSpeedChange: (e: any) => void;
  handleIntensityChange: (e: any) => void;
  handleDisplayStyleChange: () => void;
  handleSetIsOn: () => void;
  rows: number;
  intensity: number;
  speed: number;
}

const MainController: React.FC<IMainControllerProps> = ({
  handleChangeLightColor,
  handleChangeSize,
  handleIntensityChange,
  handleSetNumberOfRows,
  handleSpeedChange,
  handleSetIsOn,
  handleDisplayStyleChange,
  rows,
  intensity,
  speed,
}) => {
  return (
    <Container>
      <UpperButtonsContainer>
        {[1, 2, 3, 4, 5, 6, 7].map((e, i) => (
          <>
            <RowsButton
              id={`rb${e}`}
              onClick={handleSetNumberOfRows}
              rows={rows}
            />
            <LightController
              id={`lc${1 + i * 7}`}
              onClick={handleChangeLightColor}
              onSlide={handleChangeSize}
            />
            <LightController
              id={`lc${2 + i * 7}`}
              onClick={handleChangeLightColor}
              onSlide={handleChangeSize}
            />
            <LightController
              id={`lc${3 + i * 7}`}
              onClick={handleChangeLightColor}
              onSlide={handleChangeSize}
            />
            <LightController
              id={`lc${4 + i * 7}`}
              onClick={handleChangeLightColor}
              onSlide={handleChangeSize}
            />
            <LightController
              id={`lc${5 + i * 7}`}
              onClick={handleChangeLightColor}
              onSlide={handleChangeSize}
            />
            <LightController
              id={`lc${6 + i * 7}`}
              onClick={handleChangeLightColor}
              onSlide={handleChangeSize}
            />
            <LightController
              id={`lc${7 + i * 7}`}
              onClick={handleChangeLightColor}
              onSlide={handleChangeSize}
            />
          </>
        ))}
      </UpperButtonsContainer>
      <LowerButtonsContainer>
        <SlidersContainer>
          <SpeedSlider
            type="range"
            min={1}
            max={50}
            value={speed}
            onChange={handleSpeedChange}
          />
          <IntensitySlider
            type="range"
            min={20}
            max={100}
            value={intensity}
            onChange={handleIntensityChange}
          />
        </SlidersContainer>
        <PlayButton onClick={handleSetIsOn}>
          <div id="play-symbol" />
        </PlayButton>
      </LowerButtonsContainer>
      <DisplayStyleButton onClick={handleDisplayStyleChange} />
    </Container>
  );
};

export default MainController;
