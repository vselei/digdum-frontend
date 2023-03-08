import styled from '@emotion/styled';

const Button = styled.button`
  display: block;
  cursor: pointer;
  color: var(--secondary-color);
  background-color: var(--primary-color);
  width: var(--size-full);
  padding: var(--size-1-2);
  margin-bottom: var(--size-1-2);
  border: 1px solid var(--primary-color);
  border-radius: var(--size-1);
  font-size: var(--size-1);
  font-weight: var(--weight-700);
  text-transform: uppercase;
  text-align: center;

  transition: var(--animation-300);

  &:hover {
    color: var(--primary-color);
    background-color: var(--secondary-color);
  }

  @media (min-width: 128rem) {
    max-width: var(--resolution-480);
  }
`;

export default Button;
