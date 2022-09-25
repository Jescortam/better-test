import { SignupFormValues } from '../interfaces/Signup';

interface Errors {
  [key: string]: any;
}

export const validateSignupForm = (values: SignupFormValues) => {
  let errors: Errors = {};
  const requiredFields = ['username', 'email', 'password', 'confirmPassword'];

  errors = validateRequiredFields(errors, requiredFields, values);
  errors = validateEmail(errors, values.email);
  errors = validatePassword(errors, values.password, values.confirmPassword);

  return errors;
};

const validateRequiredFields = (
  errors: Errors,
  requiredFields: string[],
  values: SignupFormValues
) => {
  requiredFields.forEach((field: string) => {
    if (!values[field as keyof SignupFormValues]) {
      errors[field] = 'Required';
    }
  });

  return errors;
};

const validateEmail = (errors: Errors, email: string) => {
  if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const validatePassword = (
  errors: Errors,
  password: string,
  confirmPassword: string
) => {
  if (password !== confirmPassword) {
    errors.confirmPassword = 'The password is not the same';
  }

  return errors;
};
