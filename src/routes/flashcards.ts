import express from 'express';
import { validateId, isLoggedIn, isAuthor } from '../middleware';
import flashcardController from '../controllers/flashcards';
import Flashcard from '../models/Flashcard';
import Collection from '../models/Collection';

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(flashcardController.index)
  .post(isLoggedIn, isAuthor(Collection), flashcardController.create);

router
  .route('/:id')
  .get(validateId(Flashcard), flashcardController.read)
  .put(
    validateId(Flashcard),
    isLoggedIn,
    isAuthor(Flashcard),
    flashcardController.update
  )
  .delete(
    validateId(Flashcard),
    isLoggedIn,
    isAuthor(Flashcard),
    flashcardController.destroy
  );

export default router;
