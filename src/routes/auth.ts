import express from 'express';
import passport from 'passport';
import User from '../models/User';

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  const user = new User({ username, email, createdAt: new Date() });
  const registUser = await User.register(user, password);
  req.login(registUser, (err) => {
    if (err) {
      console.log(err);
      res.status(400).redirect('/auth/signup');
    }
  });
  res.status(201).redirect('/');
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  if (!req.user) res.status(400).redirect('/auth/login');
  res.status(200).redirect('/');
});

router.post('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).redirect('/');
  });
});

export default router;
