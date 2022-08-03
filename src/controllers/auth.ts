import express from 'express';
import User from '../models/User';

const signup = async (req: express.Request, res: express.Response) => {
  const { username, email, password } = req.body;
  const user = new User({ username, email, createdAt: new Date() });
  const registUser = await User.register(user, password);
  req.login(registUser, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).redirect('/auth/signup');
    }
  });
  res.status(201).redirect('/');
};

const login = (req: express.Request, res: express.Response) => {
  if (!req.user) {
    return res.status(400).redirect('/auth/login');
  }
  res.status(200).redirect('/');
};

const logout = (req: express.Request, res: express.Response) => {
  req.logout((err) => {
    if (err) {
      return res.status(400).send(err);
    }
    res.status(200).redirect('/');
  });
};

export default { signup, login, logout };
