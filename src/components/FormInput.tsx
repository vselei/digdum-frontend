import Input from '../components/Input';
import Label from '../components/Label';

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
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} placeholder={placeholder || ''} id={id} name={id} />
    </div>
  );
};

export default FormInput;
