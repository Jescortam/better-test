import express from 'express';
import {
  validateCollectionId,
  validateFlashcardId,
  isLoggedIn,
  isCollectionAuthor,
  isFlashcardAuthor,
  validateBody,
} from '../middleware';
import { flashcardJoiSchema } from '../schemas';
import catchAsync from '../utils/catchAsync';
import flashcardController from '../controllers/flashcards';

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(validateCollectionId, catchAsync(flashcardController.index))
  .post(
    validateCollectionId,
    isLoggedIn,
    isCollectionAuthor,
    validateBody(flashcardJoiSchema),
    catchAsync(flashcardController.create)
  );

router
  .route('/:id')
  .get(validateCollectionId, validateFlashcardId, flashcardController.read)
  .put(
    validateCollectionId,
    validateFlashcardId,
    isLoggedIn,
    isCollectionAuthor,
    isFlashcardAuthor,
    validateBody(flashcardJoiSchema),
    catchAsync(flashcardController.update)
  )
  .delete(
    validateCollectionId,
    validateFlashcardId,
    isLoggedIn,
    isCollectionAuthor,
    isFlashcardAuthor,
    catchAsync(flashcardController.destroy)
  );

export default router;
