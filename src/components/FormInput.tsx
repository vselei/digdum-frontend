import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from './Input';
import Label from './Label';
import IconButton from './IconButton';
import FlexContainer from './FlexContainer';
import FormControl from './FormControl';
import IconButtonType from '../helpers/IconButtonEnum';

const FormInput = ({
  id,
  label,
  type,
  placeholder,
  defaultValue
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  defaultValue: string;
}) => {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  const navigate = useNavigate();

  const handlePasswordVisibility = () =>
    setPasswordIsVisible(!passwordIsVisible);

  return (
    <FormControl>
      <FlexContainer
        gap={{
          col: 'var(--size-1)'
        }}
      >
        <Label htmlFor={id}>{label}</Label>
        {id === 'password' || id === 'confirm-password' ? (
          <IconButton type={IconButtonType.One} onClickHandler={handlePasswordVisibility}>
            {passwordIsVisible ? (
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
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            ) : (
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
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            )}
          </IconButton>
        ) : id === 'username' ? (
          <IconButton type={IconButtonType.One} onClickHandler={() => navigate('/sign-up?step=2')}>
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
                d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
              />
            </svg>
          </IconButton>
        ) : (
          <></>
        )}
      </FlexContainer>
      <Input
        type={
          type !== 'password' ? type : passwordIsVisible ? 'text' : 'password'
        }
        placeholder={placeholder}
        autoComplete={'off'}
        defaultValue={defaultValue}
        id={id}
        name={id}
      />
    </FormControl>
  );
};

export default FormInput;
