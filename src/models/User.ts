import passportLocalMongoose from 'passport-local-mongoose';
import { Schema, model, PassportLocalSchema } from 'mongoose';
import { UserSchema, UserModelType } from '../types';

const userSchema = new Schema<UserSchema, UserModelType>({
  username: { required: true, type: String },
  email: { required: true, type: String },
  ownCollections: {
    required: true,
    type: [{ type: Schema.Types.ObjectId, ref: 'Collection' }],
  },
  likedCollections: {
    required: true,
    type: [{ type: Schema.Types.ObjectId, ref: 'Collection' }],
  },
  createdAt: { required: true, type: Date },
}) as PassportLocalSchema<UserSchema, UserModelType>;

userSchema.plugin(passportLocalMongoose);

const UserModel = model<UserSchema, UserModelType>('User', userSchema);
export default UserModel;
