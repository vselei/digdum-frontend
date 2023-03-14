import styled from '@emotion/styled';

import WhiteThemeLogo from '/img/digdum-logo.svg';
import DarkThemeLogo from '/img/digdum-logo2.svg';

import useThemes from '../hooks/useThemes';

const ImageLogo = styled.img`
  max-width: var(--size-full);
`;

const Logo = () => {
  const { theme } = useThemes();

  return (
    <ImageLogo
      src={theme === 'dark' ? DarkThemeLogo : WhiteThemeLogo}
      alt="Logo DigDum: Um panda branco e azul escuro, segurando um celular"
      width={480}
    />
  );
};

export default Logo;
