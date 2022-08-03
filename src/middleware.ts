import express from 'express';
import Collection from './models/Collection';
import Flashcard from './models/Flashcard';
import { UserFormBody } from './types';

export const validateCollectionId = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const { id, collectionId } = req.params as any;
  const queryId = collectionId ? collectionId : id;
  await Collection.findById(queryId).catch((err) => {
    res.status(400).redirect('/collections');
  });
  next();
};

export const validateFlashcardId = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const { id, collectionId } = req.params as any;
  const collection = await Collection.findById(collectionId);
  if (!collection!.flashcards) {
    return res.status(400).redirect('/collections');
  }
  const flashcard = collection!.flashcards?.find(
    (flashcard) => flashcard === id
  );
  if (!flashcard) {
    return res.status(400).redirect('/collections');
  }
  next();
};

export const isLoggedIn = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (!req.isAuthenticated()) {
    res.status(401).redirect('/auth/login');
  }
  next();
};

export const isCollectionAuthor = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const { id, collectionId } = req.params;
  const queryId = collectionId ? collectionId : id;
  const collection = await Collection.findById(queryId);
  if (!collection!.author !== req.user!._id) {
    res.status(401).redirect('/collections');
  }
  next();
};

export const isFlashcardAuthor = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const { id, collectionId } = req.params;
  const flashcard = await Flashcard.findById(id);
  if (flashcard!.author !== req.user!._id) {
    res.status(401).redirect(`/collections/${collectionId}`);
  }
  next();
};

// export const validateAuthBody = (
//   req: express.Request,
//   res: express.Response,
//   next: express.NextFunction
// ) => {
//   if (typeof req.body === UserFormBody) {
//   }
// };
