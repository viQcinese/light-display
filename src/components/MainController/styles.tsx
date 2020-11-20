import styled from 'styled-components';

export const Container = styled.div`
  background: #333;
  padding: 15px;
  border-radius: 4px;
  margin: 25px;
  position: relative;
`;

export const UpperButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 30px repeat(7, 40px);
  grid-template-rows: repeat(7, 42px);
  column-gap: 5px;
  margin-bottom: 20px;
`;

export const LowerButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SlidersContainer = styled.div``;

export const PlayButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #ddd;
  outline: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 0px;
    height: 0px;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 15px solid #444;
  }
`;

export const SpeedSlider = styled.input`
  -webkit-appearance: none;
  margin: 8px;
  width: 90%;
  height: 8px;
  background: #444;
  outline: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 8px;
    border-radius: 3px;
    background: #333;
    cursor: pointer;
    margin-top: 0px;
    outline: none;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
`;

export const IntensitySlider = styled.input`
  -webkit-appearance: none;
  margin: 8px;
  width: 90%;
  height: 8px;
  background: #444;
  outline: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 8px;
    border-radius: 3px;
    background: #333;
    cursor: pointer;
    margin-top: 0px;
    outline: none;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
`;

export const DisplayStyleButton = styled.button`
  position: absolute;
  height: 15px;
  width: 10px;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  right: 5px;
  bottom: 5px;
`;
