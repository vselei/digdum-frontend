import { Outlet } from 'react-router-dom';

import Container from '../components/Container';
import Position from '../components/Position';
import ChangeTheme from '../components/ChangeTheme';

const AuthLayout = () => {
  return (
    <Container>
      <Outlet />
      <Position
        pos="fixed"
        bottom="var(--size-1)"
        right="var(--size-1)"
        media={[
          {
            size: 1024,
            css: `
            top: auto;
            bottom: var(--size-1);
          `
          }
        ]}
      >
        <ChangeTheme />
      </Position>
    </Container>
  );
};

export default AuthLayout;
