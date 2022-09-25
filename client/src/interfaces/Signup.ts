import { InjectedFormProps } from 'redux-form';

export interface SignupFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

export type SignupFormProps = InjectedFormProps<SignupFormValues, {}, string>;
