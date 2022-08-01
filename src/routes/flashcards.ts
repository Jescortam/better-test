import express from 'express';
import Flashcard from '../models/Flashcard';

const router = express.Router();

router
  .route('/')
  .get(async (req, res) => {
    console.log(req.user);
    const flashcards = await Flashcard.find({});
    res.status(200).redirect('/flashcards');
  })
  .post(async (req, res) => {
    const { body, answer, author } = req.body;
    const flashcard = new Flashcard({
      body,
      answer,
      author,
    });
    await flashcard.save();
    res.status(201).redirect('/flashcards');
  });

export default router;
