import { Outlet } from 'react-router-dom';
import BambooForestMenu from '../components/BambooForestMenu';

const BambooForestLayout = () => {
  return (
    <>
      <BambooForestMenu />
      <Outlet />
    </>
  );
};

export default BambooForestLayout;
