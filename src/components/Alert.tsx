import styled from '@emotion/styled';

import AlertType from '../utilities/AlertEnum';
import Position from './Position';

const Alert = ({ children, type }: { children: string; type: AlertType }) => {
  const AlertContainer = styled.div`
    background: linear-gradient(to right, #e62e2e, #c71e1e);
    color: var(--primary-color);
    padding: var(--size-1-2);
    font-weight: var(--weight-700);
    text-transform: uppercase;
    text-align: center;
  `;

  return (
    <Position pos='fixed' top='0' left='0'>
      <AlertContainer>
        <p>{children}</p>
      </AlertContainer>
    </Position>
  );
};

export default Alert;
