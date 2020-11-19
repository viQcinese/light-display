import React, { useEffect, useState } from 'react';

import { Container, Button } from './styles';

interface IRowsButtonProps {
  onClick: (e: any) => void;
  id: string;
  rows: number;
}

const RowsButton: React.FC<IRowsButtonProps> = ({ onClick, id, rows }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  // Keep Track of Disabled
  useEffect(() => {
    if (rows === Number(id.split('rb')[1])) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [rows, id]);

  return (
    <Container>
      <Button disabled={isDisabled} onClick={onClick} id={id} />
    </Container>
  );
};

export default RowsButton;
