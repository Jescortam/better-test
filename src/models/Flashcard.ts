import { Schema, model, Model } from 'mongoose';
import { AnswerOptionsSchema, FlashcardSchema } from '../types';

const answerOptionsSchema = new Schema<AnswerOptionsSchema>({
  content: { required: true, type: String },
  isCorrect: { required: true, type: Boolean },
});

const flashcardSchema = new Schema<FlashcardSchema, Model<FlashcardSchema>>({
  question: { required: true, type: String },
  answer: String,
  answerOptions: [answerOptionsSchema],
  image: String,
  author: { required: true, type: Schema.Types.ObjectId, ref: 'User' },
  collection: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: { required: true, type: Date },
  lastUpdatedAt: { required: true, type: Date },
});

export default model<FlashcardSchema>('Flashcard', flashcardSchema);
