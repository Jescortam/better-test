import 'dotenv/config';
import express from 'express';
import passport from 'passport';
import session from 'express-session';
import flash from 'connect-flash';
import MongooseConnect from './services/mongoose';
import sessionConfig from './services/expressSession';
import { setLocals, errorHandler } from './middleware';
import userRoutes from './routes/users';
import collectionRoutes from './routes/collections';
import flashcardRoutes from './routes/flashcards';
import miscRoutes from './routes/misc';
import User from './models/User';

const app: express.Application = express();

MongooseConnect();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session(sessionConfig));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(setLocals);

app.use('/api/users', userRoutes);
app.use('/api/collections', collectionRoutes);
app.use('/api/collections/:collectionId/flashcards', flashcardRoutes);
app.use(miscRoutes);

app.use(errorHandler);

const PORT: number = process.env.PORT ? Number(process.env.PORT) : 8000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
