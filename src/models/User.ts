import mongoose from 'mongoose';
import IUser from '../types/User';

const userSchema: mongoose.Schema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
});

export default mongoose.model<IUser>('User', userSchema);
