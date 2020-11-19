import styled from 'styled-components';

export const Container = styled.div`
  width: 20px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface IButtonProps {
  disabled: boolean;
}

export const Button = styled.button<IButtonProps>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  outline: none;
  background: '#bbb';
  opacity: ${props => (props.disabled ? 0.6 : 1.0)};
  cursor: ${props => (props.disabled ? 'auto' : 'pointer')};
`;
