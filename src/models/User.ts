import {
  Schema,
  model,
  Document,
  PassportLocalDocument,
  PassportLocalModel,
  PassportLocalSchema,
  Model,
} from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

interface User extends PassportLocalDocument {
  username: string;
}

interface UserModelType extends PassportLocalModel<User> {}

const userSchema = new Schema<User, UserModelType>({
  username: { type: String, required: true },
}) as PassportLocalSchema<User, UserModelType>;

userSchema.plugin(passportLocalMongoose);

const UserModel = model<User, UserModelType>('User', userSchema);
export default UserModel;
