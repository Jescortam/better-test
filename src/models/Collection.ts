import { Schema, model } from 'mongoose';
import { CollectionSchema } from '../types';
import Flashcard from './Flashcard';

const collectionSchema = new Schema<CollectionSchema>({
  title: { required: true, type: String },
  contributors: {
    required: true,
    type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  description: { type: String },
  flashcards: {
    required: true,
    type: [{ type: Schema.Types.ObjectId, ref: 'Flashcard' }],
  },
  image: { type: String },
  likes: { required: true, type: Number },
  views: { required: true, type: Number },
  creationDate: { required: true, type: Date },
  lastUpdateDate: { required: true, type: Date },
});

collectionSchema.post(
  'findOneAndDelete',
  async function (doc: CollectionSchema) {
    if (doc) {
      await Flashcard.deleteMany({ _id: { $in: doc.flashcards } });
    }
  }
);

export default model<CollectionSchema>('Collection', collectionSchema);
