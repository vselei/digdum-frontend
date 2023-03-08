import styled from '@emotion/styled';

const Input = styled.input`
  margin-top: var(--size-1);
  padding: var(--size-1-2);
  border: 1px solid var(--primary-color);
  border-radius: var(--size-1);
  font-size: var(--size-1);
  font-weight: var(--weight-700);
  text-transform: uppercase;
  color: var(--primary-color);
  width: var(--size-full);

  &::placeholder {
    color: var(--primary-color);
  }
`;

export default Input;
