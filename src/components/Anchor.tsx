import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const AnchorStyles = styled.span`
  color: var(--primary-color);
  text-decoration: underline var(--primary-color);
  font-size: var(--size-1);
  font-weight: var(--weight-700);
  text-transform: uppercase;
`;

const Anchor = ({ children, path }: { children: string; path: string }) => {
  return (
    <Link to={path}>
      <AnchorStyles>{children}</AnchorStyles>
    </Link>
  );
};

export default Anchor;
