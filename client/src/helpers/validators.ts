import { SignupFormValues } from '../interfaces/Signup';

export const validateSignupForm = (values: SignupFormValues) => {
  let errors: { [key: string]: any } = {};
  const requiredFields = ['username', 'email', 'password', 'confirmPassword'];

  errors = Object.assign(
    errors,
    validateRequiredFields(requiredFields, values)
  );

  errors.email = validateEmail(values.email);

  errors.confirmPassword = validatePassword(
    values.password,
    values.confirmPassword
  );

  return errors;
};

const validateRequiredFields = (
  requiredFields: string[],
  values: SignupFormValues
) => {
  const errors: { [key: string]: any } = {};

  requiredFields.forEach((field: string) => {
    if (!values[field as keyof SignupFormValues]) {
      errors[field] = 'Required';
    }
  });

  return errors;
};

const validateEmail = (email: string) => {
  if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    return 'Invalid email address';
  }
  return;
};

const validatePassword = (password: string, confirmPassword: string) => {
  if (password !== confirmPassword) {
    return 'The password is not the same';
  }

  return;
};
