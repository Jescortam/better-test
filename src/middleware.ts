import express from 'express';
import Joi from 'joi';
import Collection from './models/Collection';
import Flashcard from './models/Flashcard';

export const validateCollectionId = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const { id, collectionId } = req.params as any;
  const queryId = collectionId ? collectionId : id;
  await Collection.findById(queryId).catch((err) => {
    req.flash('failure', 'Collection not found');
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
  const flashcard = collection!.flashcards?.find(
    (flashcard) => flashcard === id
  );
  if (!flashcard) {
    req.flash('failure', 'Flashcard not found');
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
    req.flash('failure', 'You must be logged in');
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
  if (collection!.contributors.includes(req.user!._id)) {
    req.flash('failure', 'You must be the author of the collection');
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
    req.flash('failure', 'You must be the author of the flashcard');
    res.status(401).redirect(`/collections/${collectionId}`);
  }
  next();
};

export const validateBody = (schema: Joi.ObjectSchema) => {
  return (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const { error } = schema.validate(req.body);
    if (error) {
      req.flash('failure', 'You must provide valid arguments');
      return res.status(400).redirect('/');
    }
    next();
  };
};

export const errorHandler: express.ErrorRequestHandler = (
  err: any,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong');
};
