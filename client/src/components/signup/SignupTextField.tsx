import { FieldProps } from '../../interfaces/Form';
import TextField from '@mui/material/TextField';

const SignupTextField: React.FC<FieldProps> = ({
  name,
  label,
  type,
  isRequired,
}) => {
  return (
    <TextField
      name={name}
      label={label}
      margin="normal"
      variant="outlined"
      fullWidth
      required={isRequired}
      type={type}
    />
  );
};

export default SignupTextField;
