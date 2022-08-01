import mongoose from 'mongoose';

const MongooseConnect = async () => {
  await mongoose.connect(process.env.MONGODB_CONNECTION_STRING!);
  console.log('Connected to the database');
};

export { MongooseConnect };
