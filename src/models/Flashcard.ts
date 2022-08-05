import { Schema, model, Model, Document } from 'mongoose';
import { AnswerOptionsSchema, FlashcardSchema } from '../types';
import Collection from './Collection';

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
    ref: 'Collection',
  },
  createdAt: { required: true, type: Date },
  lastUpdatedAt: { required: true, type: Date },
});

flashcardSchema.post(
  'findOneAndDelete',
  async function (doc: FlashcardSchema & Document) {
    if (doc) {
      await Collection.findByIdAndUpdate(doc.collection, {
        $pull: { flashcards: doc._id },
      });
    }
  }
);

//await Collection.findByIdAndUpdate(
//  collectionId,
//  {
//    //@ts-ignore
//    $push: { flashcards: flashcard._id! },
//  },
//  { new: true }
//);
export default model<FlashcardSchema>('Flashcard', flashcardSchema);
