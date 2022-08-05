import { Schema, model } from 'mongoose';
import { CollectionSchema } from '../types';
import Flashcard from './Flashcard';

const collectionSchema = new Schema<CollectionSchema>({
  name: { required: true, type: String },
  flashcards: {
    required: true,
    type: [{ type: Schema.Types.ObjectId, ref: 'Flashcard' }],
  },
  author: { required: true, type: Schema.Types.ObjectId, ref: 'User' },
  createdAt: { required: true, type: Date },
  lastUpdatedAt: { required: true, type: Date },
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
