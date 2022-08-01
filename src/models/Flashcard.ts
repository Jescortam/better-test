import { Schema, model, Model } from 'mongoose';
import Flashcard from '../types/Flashcard';

const flashcardSchema = new Schema<Flashcard, Model<Flashcard>>({
  body: { required: true, type: String },
  answer: { required: true, type: String },
  author: { required: true, type: String },
});

export default model<Flashcard>('Flashcard', flashcardSchema);
