import mongoose from 'mongoose';
import IFlashcard from '../types/Flashcard';

const flashcardSchema: mongoose.Schema = new mongoose.Schema<IFlashcard>({
  body: { required: true, type: String },
  answer: { required: true, type: String },
  author: { required: true, type: String },
});

export default mongoose.model<IFlashcard>('Flashcard', flashcardSchema);
