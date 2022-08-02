import 'dotenv/config';
import express from 'express';
import passport from 'passport';
import session from 'express-session';
import { MongooseConnect } from './services/mongoose';
import sessionConfig from './services/expressSession';
import authRoutes from './routes/auth';
import userRoutes from './routes/users';
import collectionRoutes from './routes/collections';
import flashcardRoutes from './routes/flashcards';
import User from './models/User';

const app: express.Application = express();

MongooseConnect().catch((err: unknown) => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session(sessionConfig));

app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/collections', collectionRoutes);
app.use('/api/collections/:collectionId/flashcards', flashcardRoutes);

app.get('/', (req, res) => {
  res.status(200).send('Hello');
});

const PORT: number = 8000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
