import express from 'express';
import Flashcard from '../models/Flashcard';

const router = express.Router();

router
  .route('/')
  .get(async (req, res) => {
    const flashcards = await Flashcard.find({});
    res.send(flashcards);
  })
  .post(async (req, res) => {
    const { body, answer, author } = req.body;
    const flashcard = new Flashcard({
      body,
      answer,
      author,
    });
    await flashcard.save();
    res.redirect('/flashcards');
  });

export default router;
