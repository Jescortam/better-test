import { Schema, model } from 'mongoose';
import { CollectionSchema } from '../types';

const collectionSchema = new Schema<CollectionSchema>({
  name: { required: true, type: String },
  flashcards: [{ type: Schema.Types.ObjectId, ref: 'Flashcard' }],
  author: { required: true, type: Schema.Types.ObjectId, ref: 'User' },
  createdAt: { required: true, type: Date },
  lastUpdatedAt: { required: true, type: Date },
});

export default model<CollectionSchema>('Collection', collectionSchema);
