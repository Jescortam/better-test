import { InjectedFormProps } from 'redux-form';

export interface SignupFormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type SignupFormProps = InjectedFormProps<SignupFormValues, {}, string>;
