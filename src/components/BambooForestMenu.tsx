import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Container from './Container';
import FlexContainer from './FlexContainer';
import Image from './Image';
import Position from './Position';
import ProfileImg from './ProfileImg';

import ProfileImage from '/img/profile.jpg';
import Icon from '/img/favicon.svg';

const Header = styled.header`
  width: var(--w-100);
  background-color: var(--gradient);
  padding: var(--size-1);
`;

const HeaderLogoContainer = styled.div`
  width: var(--size-4);
`;

const BambooForestMenu = () => {
  return (
    <Position pos="fixed" bottom="0" left="0">
      <Header>
        <Container>
          <FlexContainer justifyContent="space-between" alignItems="center">
            <HeaderLogoContainer>
              <button type='button'>
                <Image
                  src={Icon}
                  width={40}
                  alt="Icone DigDum: um panda azul escuro e branco"
                />
              </button>
            </HeaderLogoContainer>
            <Link to="/panda">
              <ProfileImg src={ProfileImage} size="var(--size-4)" />
            </Link>
          </FlexContainer>
        </Container>
      </Header>
    </Position>
  );
};

export default BambooForestMenu;
