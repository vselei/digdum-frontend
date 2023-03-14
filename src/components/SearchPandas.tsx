import styled from '@emotion/styled';
import IconButtonType from '../helpers/IconButtonEnum';
import FlexContainer from './FlexContainer';
import IconButton from './IconButton';

const InputSearch = styled.input`
  color: var(--primary-color);
  font-size: var(--size-1);
  font-weight: var(--weight-700);
  padding: var(--size-1) var(--size-1-2);
  border: 1px solid var(--primary-color);
  border-top-left-radius: var(--size-1);
  border-bottom-left-radius: var(--size-1);
  width: 25vw;

  &::placeholder {
    color: var(--primary-color);
    text-transform: uppercase;
  }
`;

const SearchIcon = styled.div`
  padding: calc(var(--size-1) - 0.2rem);
  background-color: var(--primary-color);
  border-top-right-radius: var(--size-1);
  border-bottom-right-radius: var(--size-1);

  & svg {
    width: var(--size-1-2);
    color: var(--secondary-color);
  }
`;

const SearchPandas = () => {
  return (
    <FlexContainer alignItems="center">
      <InputSearch placeholder="Procurar usuários" />
      <IconButton type={IconButtonType.Two} onClickHandler={() => {}}>
        <SearchIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </SearchIcon>
      </IconButton>
    </FlexContainer>
  );
};

export default SearchPandas;
