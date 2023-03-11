import styled from "@emotion/styled";

const IconButton = styled.button`
  cursor: pointer;
  color: var(--primary-color);

  & > svg {
    width: var(--size-1-2);
  }
`;

export default IconButton;