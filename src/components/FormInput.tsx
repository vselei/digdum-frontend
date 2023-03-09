import Input from '../components/Input';
import Label from '../components/Label';
import FormControl from './FormControl';

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
      <Label htmlFor={id}>{label}</Label>
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
