import { Schema, PassportLocalDocument, PassportLocalModel } from 'mongoose';

export interface CollectionSchema {
  title: string;
  contributors: Schema.Types.ObjectId[];
  description: string;
  flashcards?: Schema.Types.ObjectId[];
  image: string;
  likes: number;
  views: number;
  creationDate: Date;
  lastUpdateDate: Date;
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
  collectionId: Schema.Types.ObjectId;
  createdAt: Date;
  lastUpdatedAt: Date;
}

export interface UserSchema extends PassportLocalDocument {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date;
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
