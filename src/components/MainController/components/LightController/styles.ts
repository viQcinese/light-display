import styled from 'styled-components';

export const Container = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  width: 40px;
  height: 20px;
  border-radius: 4px;
  outline: none;
  background: #888;
  cursor: pointer;
`;

export const Slider = styled.input`
  -webkit-appearance: none;
  margin-top: 8px;
  width: 40px;
  height: 5px;
  background: #444;
  outline: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 10px;
    width: 4px;
    border-radius: 3px;
    background: #333;
    cursor: pointer;
    margin-top: 0px;
    outline: none;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
`;
