import styled from '@emotion/styled';

const Button = styled.button`
  cursor: pointer;
  color: var(--color-white);
  background-color: var(--color-blue-900);
  width: var(--size-full);
  max-width: var(--resolution-480);
  padding: var(--size-1-2);
  border: 1px solid var(--color-blue-900);
  border-radius: var(--size-1);
  font-size: var(--size-1);
  font-weight: var(--weight-700);
  text-transform: uppercase;
  text-align: center;

  transition: var(--animation-300);

  &:hover {
    color: var(--color-blue-900);
    background-color: var(--color-white);
  }
`;

export default Button;
