import { Field, WrappedFieldProps } from 'redux-form';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { FieldProps } from '../interfaces/Form';

export const renderFields = (fields: FieldProps[]) => {
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

export const renderTextField: React.FC<WrappedFieldProps & TextFieldProps> = ({
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
      {...input}
      {...custom}
    />
  );
};
