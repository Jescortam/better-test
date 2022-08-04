import mongoose from 'mongoose';
import catchAsync from '../utils/catchAsync';

export default () => {
  catchAsync(async () => {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING!);
    console.log('Connected to the database');
  });
};
