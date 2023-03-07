import Input from '../components/Input';
import Label from '../components/Label';

const FormInput = ({
  label,
  type,
  placeholder
}: {
  label: string;
  type: string;
  placeholder?: string;
}) => {
  let identifier = label.toLowerCase();

  if (identifier.includes(' ')) {
    identifier = identifier.replaceAll(' ', '-');
  }

  return (
    <div>
      <Label htmlFor={identifier}>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder || ''}
        id={identifier}
        name={identifier}
      />
    </div>
  );
};

export default FormInput;
