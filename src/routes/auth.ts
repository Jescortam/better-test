import express from 'express';
import passport from 'passport';
import { isLoggedIn } from '../middleware';
import authController from '../controllers/auth';

const router = express.Router();

router.post('/signup', authController.signup);

router.post('/login', passport.authenticate('local'), authController.login);

router.post('/logout', isLoggedIn, authController.logout);

export default router;
