import express from 'express';
import User from '../models/User';

const signup = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({
      username,
      email,
      createdAt: new Date(),
    });
    const registUser = await User.register(user, password);
    req.login(registUser, (err) => {
      if (err) return next(err);
      req.flash('success', 'Successfully logged in');
      res.status(201).send(req.user);
    });
  } catch (err: any) {
    req.flash('failure', err.message);
    res.status(500).redirect('/signup');
  }
};

const login = (req: express.Request, res: express.Response) => {
  req.flash('success', 'Welcome back');
  res.status(200).send(req.user);
};

const logout = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  req.logout((err) => next(err));
  req.flash('success', 'Goodbye');
  res.status(200).redirect('/');
};

const fetchUser = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const user = await User.findById(req.params.id);
  res.status(200).send(user);
};

export default { signup, login, logout };
