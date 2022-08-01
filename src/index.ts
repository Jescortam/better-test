import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import User from './models/User';
import Flashcard from './models/Flashcard';

const app: express.Application = express();

(async () => {
  await mongoose.connect(process.env.MONGODB_CONNECTION_STRING!);
  console.log('Connected to the database');
})().catch((err: unknown) => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const store = new MongoStore({
  mongoUrl: process.env.MONGODB_CONNECTION_STRING,
});

store.on('error', (e) => {
  console.log('SESSION STORE ERROR', e);
});

const sessionConfig = {
  secret: process.env.EXPRESS_SESSION_SECRET!,
  resave: false,
  saveUninitialized: false,
  store,
  cookie: {
    httpOnly: true,
    maxAge: 3600000 * 24,
  },
};

app.use(session(sessionConfig));

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/flashcards', async (req, res) => {
  console.log(req.user);
  const flashcards = await Flashcard.find({});
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
  res.redirect('/flashcards');
});

app.get('/users', async (req, res) => {
  const users = await User.find({});
  res.send(users);
});

// app.post('/users', async (req, res) => {
//   const { name, age } = req.body;
//   const user = new User({
//     name,
//     age,
//   });
//   await user.save();
//   res.redirect('/users');
// });

app.post('/auth/signup', async (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username });
  const registUser = await User.register(user, password);
  req.login(registUser, (err) => {
    if (err) console.log(err);
  });
  res.redirect('/');
});

app.post(
  '/auth/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
  })
);

app.post('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

const PORT: number = 8000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
