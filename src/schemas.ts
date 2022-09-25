import Joi from 'joi';

export const flashcardJoiSchema = Joi.object({
  question: Joi.string().required().trim(),
  image: Joi.string().trim(),
  answer: Joi.string().trim(),
  answerOptions: Joi.array().items(
    Joi.object({
      content: Joi.string().required().trim(),
      isCorrect: Joi.bool().required(),
    })
  ),
}).or('image', 'answer', 'answerOptions');

export const collectionJoiSchema = Joi.object({
  title: Joi.string().required().trim(),
  description: Joi.string().trim(),
  flashcards: Joi.array().items(flashcardJoiSchema),
  image: Joi.string(),
});

export const userJoiSchema = Joi.object({
  firstName: Joi.string().required().trim(),
  lastName: Joi.string().required().trim(),
  email: Joi.string().email().trim(),
  birthDate: Joi.date().required(),
  password: Joi.string().trim(),
});
