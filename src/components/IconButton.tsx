import styled from '@emotion/styled';

import IconButtonType from '../helpers/IconButtonEnum';

const IconButtonTypeOne = styled.button`
  cursor: pointer;
`;

const IconButtonTypeTwo = styled.button`
  cursor: pointer;
  color: var(--primary-color);

  & > svg {
    width: var(--size-1-2);
  }
`;

const IconButtonTypeThree = styled.button`
  cursor: pointer;
  border: 1px solid var(--primary-color);
  padding: var(--size-1);
  color: var(--secondary-color);
  background-color: var(--primary-color);
  border-radius: var(--size-1);
  border: 2px solid var(--secondary-color);

  & > svg {
    width: var(--size-2);
  }
`;

const IconButton = ({
  children,
  type,
  onClickHandler
}: {
  children: React.ReactElement;
  type: IconButtonType;
  onClickHandler: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  if (type === IconButtonType.One) {
    return (
      <IconButtonTypeOne type="button" onClick={onClickHandler}>
        {children}
      </IconButtonTypeOne>
    );
  } else if (type === IconButtonType.Two) {
    return (
      <IconButtonTypeTwo type="button" onClick={onClickHandler}>
        {children}
      </IconButtonTypeTwo>
    );
  } else {
    return (
      <IconButtonTypeThree type="button" onClick={onClickHandler}>
        {children}
      </IconButtonTypeThree>
    );
  }
};

export default IconButton;
