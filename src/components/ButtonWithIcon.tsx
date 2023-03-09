import styled from '@emotion/styled';

const ButtonWithIcon = styled.button`
  cursor: pointer;
  border: 1px solid var(--primary-color);
  padding: var(--size-1);
  color: var(--secondary-color);
  background-color: var(--primary-color);
  border-radius: var(--size-1);

  & > svg {
    width: var(--size-2);
  }
`;

export default ButtonWithIcon;