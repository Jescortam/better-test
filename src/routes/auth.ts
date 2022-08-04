import express from 'express';
import passport from 'passport';
import { isLoggedIn, validateBody } from '../middleware';
import { userJoiSchema } from '../schemas';
import catchAsync from '../utils/catchAsync';
import authController from '../controllers/auth';

const router = express.Router();

router.post(
  '/signup',
  validateBody(userJoiSchema),
  catchAsync(authController.signup)
);

router.post(
  '/login',
  validateBody(userJoiSchema),
  passport.authenticate('local', {
    failureRedirect: '/auth/login',
    failureFlash: true,
    successFlash: true,
  }),
  catchAsync(authController.login)
);

router.post('/logout', isLoggedIn, authController.logout);

export default router;
