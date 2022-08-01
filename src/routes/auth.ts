import express from 'express';
import passport from 'passport';
import User from '../models/User';

const router = express.Router();

router.post('/auth/signup', async (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username });
  const registUser = await User.register(user, password);
  req.login(registUser, (err) => {
    if (err) console.log(err);
  });
  res.redirect('/');
});

router.post(
  '/auth/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
  })
);

router.post('/auth/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

export default router;
