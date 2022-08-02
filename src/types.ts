import { Schema, PassportLocalDocument, PassportLocalModel } from 'mongoose';

export interface CollectionSchema {
  name: string;
  flashcards?: Schema.Types.ObjectId[];
  author: Schema.Types.ObjectId;
  createdAt: Date;
  lastUpdatedAt: Date;
}

export interface AnswerOptionsSchema {
  content: string;
  isCorrect: boolean;
}

export interface FlashcardSchema {
  question: string;
  image?: string;
  answer?: string;
  answerOptions?: AnswerOptionsSchema[];
  author: Schema.Types.ObjectId;
  collection: Schema.Types.ObjectId;
  createdAt: Date;
  lastUpdatedAt: Date;
}

export interface UserSchema extends PassportLocalDocument {
  username: string;
  email: string;
  ownCollections: CollectionSchema[];
  likedCollections: CollectionSchema[];
  createdAt: Date;
}

export interface UserModelType extends PassportLocalModel<UserSchema> {}

declare global {
  namespace Express {
    interface User extends UserSchema {}
  }
}
