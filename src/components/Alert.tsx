import styled from '@emotion/styled';

import AlertType from '../utilities/AlertEnum';

const Alert = ({ children, type }: { children: string; type: AlertType }) => {
  const AlertContainer = styled.div`
    color: ${type === AlertType.Error ? 'red' : 'green'};
  `;

  return (
    <AlertContainer>
      <p>{children}</p>
    </AlertContainer>
  );
};

export default Alert;
