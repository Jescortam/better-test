import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import User from './models/User';
import IUser from './types/User';
import Flashcard from './models/Flashcard';
import IFlashcard from './types/Flashcard';

const app: express.Application = express();

(async () => {
  await mongoose.connect(process.env.MONGODB_CONNECTION_STRING!);
  console.log('Connected to the database');
})().catch((err: unknown) => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/flashcards', async (req, res) => {
  const flashcards: IFlashcard[] = await Flashcard.find({});
  res.send(flashcards);
});

app.post('/flashcards', async (req, res) => {
  const { body, answer, author } = req.body;
  const flaschard = new Flashcard({
    body,
    answer,
    author,
  });
  await flaschard.save();
  res.redirect('/flaschard');
});

app.get('/users', async (req, res) => {
  const users: IUser[] = await User.find({});
  res.send(users);
});

app.post('/users', async (req, res) => {
  const { name, age } = req.body;
  const user = new User({
    name,
    age,
  });
  await user.save();
  res.redirect('/users');
});

const PORT: number = 8000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
