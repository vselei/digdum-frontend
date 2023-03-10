import styled from '@emotion/styled';
import { useEffect } from 'react';
import useAlert from '../hooks/useAlert';
import AlertType from '../utilities/AlertEnum';

const ProgressBarStyles = styled.div`
  height: 4px;
  background-color: var(--primary-color);
  animation: fillSize 5s forwards 1 linear;

  @keyframes fillSize {
    from {
      width: 0;
    }

    to {
      width: var(--w-100);
    }
  }
`;

const ProgressBar = () => {
  const { showAlert } = useAlert();

  useEffect(() => {
    const progressTimer = setTimeout(() => {
      showAlert({ type: AlertType.Error, message: '' });
    }, 5000);

    return () => {
      clearTimeout(progressTimer);
    };
  }, []);

  return <ProgressBarStyles />;
};

export default ProgressBar;
