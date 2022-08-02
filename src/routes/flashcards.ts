import express from 'express';
import Flashcard from '../models/Flashcard';
import Collection from '../models/Collection';

const router = express.Router({ mergeParams: true });

const baseRoute = (collectionId: string): string => {
  return `/collections/${collectionId}/flashcards`;
};

router
  .route('/')
  .get(async (req, res) => {
    let flashcards = await Flashcard.find({});
    if (!flashcards) {
      flashcards = [];
    }
    res.status(200).send(flashcards);
  })
  .post(async (req, res) => {
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
  });

router
  .route('/:id')
  .get(async (req, res) => {
    const { collectionId, id } = req.params as any;
    const flashcard = await Flashcard.findById(id);
    if (flashcard) {
      res.status(200).send(flashcard);
    }
    res.status(400).redirect(baseRoute(collectionId));
  })
  .put(async (req, res) => {
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
      res.status(400).redirect(baseRoute(collectionId));
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
      res.status(400).redirect(baseRoute(collectionId));
    }
    res.status(200).redirect(baseRoute(collectionId));
  })
  .delete(async (req, res) => {
    const { collectionId, id } = req.params as any;
    await Flashcard.findByIdAndDelete(id);
    res.status(200).redirect(baseRoute(collectionId));
  });

export default router;
