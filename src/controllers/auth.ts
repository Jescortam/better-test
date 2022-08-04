import express from 'express';
import User from '../models/User';

const signup = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, createdAt: new Date() });
    const registUser = await User.register(user, password);
    req.login(registUser, (err) => {
      if (err) return next(err);
      req.flash('success', 'Successfully logged in');
      res.status(201).redirect('/');
    });
  } catch (err: any) {
    req.flash('failure', err.message);
    res.status(500).redirect('/auth/signup');
  }
};

const login = (req: express.Request, res: express.Response) => {
  req.flash('success', 'Welcome back');
  res.status(200).redirect('/');
};

const logout = (req: express.Request, res: express.Response) => {
  req.logout();
  req.flash('success', 'Goodbye');
  res.status(200).redirect('/');
};

export default { signup, login, logout };