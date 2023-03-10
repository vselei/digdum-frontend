import styled from '@emotion/styled';

import AlertType from '../utilities/AlertEnum';
import Position from './Position';

const Alert = ({ children, type }: { children: string; type: AlertType }) => {
  const AlertContainer = styled.div`
    width: var(--w-100);
    background: ${type === AlertType.Error
      ? 'linear-gradient(to right, #e62e2e, #c71e1e)'
      : 'linear-gradient(to right, #378746, #15c636)'};
    color: var(--white-color);
    font-size: var(--size-1-2);
    font-weight: var(--weight-700);
    text-transform: uppercase;
    text-align: center;

    & > p {
      padding: var(--size-2);
    }
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
