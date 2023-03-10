import styled from '@emotion/styled';

import AlertType from '../utilities/AlertEnum';
import Position from './Position';

const Alert = ({ children, type }: { children: string; type: AlertType }) => {
  const AlertContainer = styled.div`
    width: 100vw;
    background: ${type === AlertType.Error
      ? 'linear-gradient(to right, #e62e2e, #c71e1e)'
      : 'linear-gradient(to right, #378746, #15c636)'};
    color: #f4f4f4;
    padding: var(--size-2);
    font-size: var(--size-1-2);
    font-weight: var(--weight-700);
    text-transform: uppercase;
    text-align: center;
  `;

  return (
    <Position pos="fixed" top="0" left="0">
      <AlertContainer>
        <p>{children}</p>
      </AlertContainer>
    </Position>
  );
};

export default Alert;
