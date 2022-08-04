import Joi from 'joi';

export const collectionJoiSchema = Joi.object({
  name: Joi.string().required().trim(),
});

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

export const userJoiSchema = Joi.object({
  username: Joi.string().required().trim(),
  email: Joi.string().email().trim(),
  password: Joi.string().trim(),
});
