import styled from '@emotion/styled';
import Input from '../components/Input';
import Label from '../components/Label';
import FlexContainer from './FlexContainer';
import FormControl from './FormControl';

const IconButton = styled.button``;

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
  // TODO: Ver senha ao clicar no olho

  return (
    <FormControl>
      <FlexContainer>
        <Label htmlFor={id}>{label}</Label>
        <IconButton>Hello</IconButton>
      </FlexContainer>
      <Input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        id={id}
        name={id}
      />
    </FormControl>
  );
};

export default FormInput;
