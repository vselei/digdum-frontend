import Input from '../components/Input';
import Label from '../components/Label';
import FormControl from './FormControl';

const FormInput = ({
  id,
  label,
  type,
  placeholder
}: {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
}) => {
  return (
    <FormControl>
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} placeholder={placeholder || ''} id={id} name={id} />
    </FormControl>
  );
};

export default FormInput;
