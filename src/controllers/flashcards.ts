import express from 'express';
import Flashcard from '../models/Flashcard';
import Collection from '../models/Collection';

const baseRoute = (collectionId: string): string => {
  return `/collections/${collectionId}/flashcards`;
};

const index = async (req: express.Request, res: express.Response) => {
  let flashcards = await Flashcard.find({});
  if (!flashcards) {
    flashcards = [];
  }
  res.status(200).send(flashcards);
};

const create = async (req: express.Request, res: express.Response) => {
  const { collectionId } = req.params as any;
  const {
    question,
    answer = null,
    answerOptions = null,
    image = null,
  } = req.body;
  const flashcard = new Flashcard({
    question,
    answer,
    answerOptions,
    image,
    author: req.user!._id,
    collection: collectionId,
    createdAt: new Date(),
    lastUpdatedAt: new Date(),
  });
  await flashcard.save();
  res.status(201).redirect(baseRoute(collectionId));
};

const read = async (req: express.Request, res: express.Response) => {
  const { collectionId, id } = req.params as any;
  const flashcard = await Flashcard.findById(id);
  if (flashcard) {
    return res.status(200).send(flashcard);
  }
  res.status(400).redirect(baseRoute(collectionId));
};

const update = async (req: express.Request, res: express.Response) => {
  const { collectionId, id } = req.params as any;
  const { question, answer, answerOptions, image } = req.body;
  const flashcard = await Flashcard.findByIdAndUpdate(
    id,
    {
      question,
      answer,
      answerOptions,
      image,
      lastUpdatedAt: new Date(),
    },
    { new: true }
  );
  if (typeof flashcard === null) {
    return res.status(400).redirect(baseRoute(collectionId));
  }
  await flashcard!.save();
  const collection = await Collection.findByIdAndUpdate(
    collectionId,
    {
      $push: { flashcards: id },
    },
    { new: true }
  );
  if (!collection) {
    return res.status(400).redirect(baseRoute(collectionId));
  }
  res.status(200).redirect(baseRoute(collectionId));
};

const destroy = async (req: express.Request, res: express.Response) => {
  const { collectionId, id } = req.params as any;
  await Flashcard.findByIdAndDelete(id);
  res.status(200).redirect(baseRoute(collectionId));
};

export default { index, create, read, update, destroy };
