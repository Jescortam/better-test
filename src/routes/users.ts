import express from 'express';
import passport from 'passport';
import { isLoggedIn, validateBody } from '../middleware';
import { userJoiSchema } from '../schemas';
import catchAsync from '../utils/catchAsync';
import userController from '../controllers/users';

const router = express.Router();

router.post(
  '/signup',
  validateBody(userJoiSchema),
  catchAsync(userController.signup)
);

router.post(
  '/login',
  validateBody(userJoiSchema),
  passport.authenticate('local', {
    failureRedirect: '/auth/login',
    failureFlash: true,
    successFlash: true,
  }),
  catchAsync(userController.login)
);

router.post('/logout', isLoggedIn, userController.logout);

export default router;
