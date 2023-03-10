import styled from '@emotion/styled';
import React from 'react';

const IconBtnStyles = styled.button`
  cursor: pointer;
  color: var(--primary-color);

  & > svg {
    width: var(--size-1-2);
  }
`;

const IconButton = ({
  children,
  type,
  onClickHandler
}: {
  children: React.ReactElement;
  type: 'button' | 'submit' | 'reset' | undefined;
  onClickHandler: React.MouseEventHandler<HTMLButtonElement> | undefined
}) => {
  return <IconBtnStyles type={type} onClick={onClickHandler}>{children}</IconBtnStyles>;
};

export default IconButton;
