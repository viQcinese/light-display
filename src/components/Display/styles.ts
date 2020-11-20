import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  display: grid;
  grid-template-columns: repeat(7, 60px);
  grid-template-rows: repeat(7, 60px);
  margin: 25px;
`;

export const Light = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: red;
  color: red;
  opacity: 0.2;
  margin: 5px;
`;
