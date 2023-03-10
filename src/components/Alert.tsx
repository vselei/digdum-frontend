import styled from '@emotion/styled';

import AlertType from '../helpers/AlertEnum';
import Position from './Position';

const Alert = ({ children, type }: { children: string; type: AlertType }) => {
  const AlertContainer = styled.div`
    width: var(--w-100);
    background: ${type === AlertType.Error
      ? 'linear-gradient(to right, #e62e2e, #c71e1e)'
      : type === AlertType.Info
      ? 'linear-gradient(to right, #0c2656, #233a66)'
      : 'linear-gradient(to right, #378746, #15c636)'};
    color: var(--white-color);
    font-size: var(--size-1);
    font-weight: var(--weight-700);
    text-transform: uppercase;
    text-align: center;

    & > p {
      padding: var(--size-1-2);
    }
  `;

  return (
    <Position pos="sticky" top="0" left="0">
      <AlertContainer>
        <p>{children}</p>
      </AlertContainer>
    </Position>
  );
};

export default Alert;
