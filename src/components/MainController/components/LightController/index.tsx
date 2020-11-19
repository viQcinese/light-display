import React from 'react';

import { Container, Button, Slider } from './styles';

interface ILightController {
  id: string;
  onClick: (e: any) => void;
  onSlide: (e: any) => void;
}

const LightController: React.FC<ILightController> = ({
  id,
  onClick,
  onSlide,
}) => {
  return (
    <Container id={id}>
      <Button onClick={onClick} />
      <Slider type="range" min={25} max={100} onChange={onSlide} />
    </Container>
  );
};

export default LightController;
