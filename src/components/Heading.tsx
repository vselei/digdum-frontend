import styled from '@emotion/styled';

const Heading = styled.h1`
  font-size: var(--size-3);
  font-weight: var(--weight-700);
  text-transform: uppercase;
  color: var(--primary-color);
  margin-bottom: var(--size-3);

  @media (min-width: 1024px) {
    font-size: var(--size-4);
  }
`;

export default Heading;
