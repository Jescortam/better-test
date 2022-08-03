import express from 'express';
import { validateId, isLoggedIn, isAuthor } from '../middleware';
import collectionController from '../controllers/collections';
import Collection from '../models/Collection';

const router = express.Router();

router
  .route('/')
  .get(collectionController.index)
  .post(isLoggedIn, collectionController.create);

router
  .route('/:id')
  .get(validateId(Collection), collectionController.read)
  .put(
    validateId(Collection),
    isLoggedIn,
    isAuthor(Collection),
    collectionController.update
  )
  .delete(
    validateId(Collection),
    isLoggedIn,
    isAuthor(Collection),
    collectionController.destroy
  );

export default router;
