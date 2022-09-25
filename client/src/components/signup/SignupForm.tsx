import { reduxForm, Field, WrappedFieldProps } from 'redux-form';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { validateSignupForm } from '../../helpers/validators';
import { SignupFormProps } from '../../interfaces/Signup';
import { FieldProps } from '../../interfaces/Form';

const fields: FieldProps[] = [
  {
    name: 'username',
    label: 'Username',
  },
  {
    name: 'email',
    label: 'Email',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
  },
  {
    name: 'confirmPassword',
    label: 'Confirm password',
    type: 'password',
  },
];

const SignupFormBoxStyles = {
  border: '1px solid #ccc',
  padding: 2,
  borderRadius: 2,
};

const SignupFormButtonBoxStyles = {
  mt: 3,
  display: 'flex',
  justifyContent: 'end',
};

const onSubmit = (values: Object) => {
  console.log(values);
};

const SignupForm: React.FC<SignupFormProps> = (props) => {
  const { handleSubmit } = props;

  const renderTextField: React.FC<WrappedFieldProps & TextFieldProps> = ({
    input,
    label,
    meta: { touched, error },
    ...custom
  }) => {
    return (
      <TextField
        label={label}
        error={touched && error}
        helperText={error}
        margin="normal"
        variant="outlined"
        fullWidth
        InputLabelProps={{ shrink: true }}
        {...input}
        {...custom}
      />
    );
  };

  const renderFields = (fields: FieldProps[]) => {
    return fields.map(({ name, label, type }) => {
      return (
        <div>
          <Field
            name={name}
            component={renderTextField}
            label={label}
            type={type}
          />
        </div>
      );
    });
  };

  return (
    <Box sx={SignupFormBoxStyles}>
      <Typography variant="h5" component="h1">
        Sign up now
      </Typography>
      <form onSubmit={handleSubmit}>
        {renderFields(fields)}
        <Box sx={SignupFormButtonBoxStyles}>
          <Button type="submit" variant="contained">
            Next
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default reduxForm({
  form: 'signup',
  onSubmit,
  validate: validateSignupForm,
})(SignupForm);
