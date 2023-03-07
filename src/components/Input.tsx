import styled from '@emotion/styled';

const Input = styled.input`
  margin-top: var(--size-1);
  padding: var(--size-1-2);
  border: 1px solid var(--color-blue-900);
  border-radius: var(--size-1);
  font-size: var(--size-1);
  font-weight: var(--weight-700);
  text-transform: uppercase;
  color: var(--color-blue-900);
  width: var(--size-full);
  max-width: var(--resolution-480);

  &::placeholder {
    color: var(--color-blue-900);
  }
`;

export default Input;
