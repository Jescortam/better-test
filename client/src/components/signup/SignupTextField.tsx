import { WrappedFieldProps } from 'redux-form';
import TextField, { TextFieldProps } from '@mui/material/TextField';

const SignupTextField: React.FC<
  WrappedFieldProps & TextFieldProps & { isRequired: boolean }
> = ({ input, label, isRequired, meta: { touched, error }, ...custom }) => {
  return (
    <TextField
      label={label}
      error={touched && error}
      helperText={touched && error}
      margin="normal"
      variant="outlined"
      fullWidth
      required={isRequired}
      {...input}
      {...custom}
    />
  );
};

export default SignupTextField;
