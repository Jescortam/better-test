import { PassportLocalDocument } from 'mongoose';
export default interface User extends PassportLocalDocument {
  username: string;
}
