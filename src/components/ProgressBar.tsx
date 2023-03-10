import styled from '@emotion/styled';
import { useEffect } from 'react';

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
  useEffect(() => {
    const progressTimer = setTimeout(() => {
      console.log('hello');
    }, 5000);

    return () => {
      clearTimeout(progressTimer);
    }
  }, []);

  return <ProgressBarStyles />;
};

export default ProgressBar;
