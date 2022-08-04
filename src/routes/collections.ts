import express from 'express';
import {
  validateCollectionId,
  isLoggedIn,
  validateBody,
  isCollectionAuthor,
} from '../middleware';
import { collectionJoiSchema } from '../schemas';
import catchAsync from '../utils/catchAsync';
import collectionController from '../controllers/collections';

const router = express.Router();

router
  .route('/')
  .get(catchAsync(collectionController.index))
  .post(
    isLoggedIn,
    validateBody(collectionJoiSchema),
    catchAsync(collectionController.create)
  );

router
  .route('/:id')
  .get(validateCollectionId, catchAsync(collectionController.read))
  .put(
    validateCollectionId,
    isLoggedIn,
    isCollectionAuthor,
    validateBody(collectionJoiSchema),
    catchAsync(collectionController.update)
  )
  .delete(
    validateCollectionId,
    isLoggedIn,
    isCollectionAuthor,
    catchAsync(collectionController.destroy)
  );

export default router;
