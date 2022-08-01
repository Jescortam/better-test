import express from 'express';
import User from '../models/User';

const router = express.Router();

router.get('/users', async (req, res) => {
  const users = await User.find({});
  res.status(200).redirect('/users');
});

export default router;
