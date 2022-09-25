import passportLocalMongoose from 'passport-local-mongoose';
import { Schema, model, PassportLocalSchema } from 'mongoose';
import { UserSchema, UserModelType } from '../types';
import Collection from './Collection';

const userSchema = new Schema<UserSchema, UserModelType>({
  firstName: { required: true, type: String },
  lastName: { required: true, type: String },
  email: { required: true, type: String },
  birthDate: { required: true, type: Date },
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

userSchema.post('findOneAndDelete', async function (doc: UserSchema) {
  if (doc) {
    await Collection.deleteMany({ _id: { $in: doc.ownCollections } });
  }
});

userSchema.plugin(passportLocalMongoose);

const UserModel = model<UserSchema, UserModelType>('User', userSchema);
export default UserModel;
