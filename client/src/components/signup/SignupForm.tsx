import { reduxForm, Field } from 'redux-form';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SignupTextField from './SignupTextField';
import { validateSignupForm } from '../../helpers/validators';
import { SignupFormProps } from '../../interfaces/Signup';
import { FieldProps } from '../../interfaces/Form';

const fields: FieldProps[] = [
  {
    name: 'username',
    label: 'Username',
    isRequired: true,
  },
  {
    name: 'email',
    label: 'Email',
    isRequired: true,
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    isRequired: true,
  },
  {
    name: 'confirmPassword',
    label: 'Confirm password',
    type: 'password',
    isRequired: true,
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

  const renderFields = (fields: FieldProps[]) => {
    return fields.map((field) => {
      return (
        <div>
          <Field key={field.name} component={SignupTextField} {...field} />
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
            Submit
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
