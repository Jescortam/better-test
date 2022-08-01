import {
  Schema,
  model,
  Document,
  PassportLocalModel,
  PassportLocalSchema,
  Model,
} from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
import User from '../types/User';

interface UserModelType extends PassportLocalModel<User> {}

const userSchema = new Schema<User, UserModelType>({
  username: { type: String, required: true },
}) as PassportLocalSchema<User, UserModelType>;

userSchema.plugin(passportLocalMongoose);

const UserModel = model<User, UserModelType>('User', userSchema);
export default UserModel;
