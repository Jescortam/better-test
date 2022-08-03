import express from 'express';
import Collection from '../models/Collection';
import User from '../models/User';

const index = async (req: express.Request, res: express.Response) => {
  let collections = await Collection.find();
  if (!collections) {
    collections = [];
  }
  res.status(200).send(collections);
};

const create = async (req: express.Request, res: express.Response) => {
  const { name } = req.body;
  const collection = new Collection({
    name,
    flashcards: null,
    author: req.user!._id,
    createdAt: new Date(),
    lastUpdatedAt: new Date(),
  });
  if (!collection) {
    return res.status(400).redirect('/collections');
  }
  await collection.save();
  const { _id } = collection;
  const user = await User.findByIdAndUpdate(
    req.user!._id,
    //@ts-ignore
    { $push: { ownCollections: collection._id } },
    { new: true }
  );
  if (!user) {
    return res.status(400).redirect('/collections');
  }
  res.status(201).redirect(`/collections/${_id}`);
};

const read = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const collection = await Collection.findById(id);
  if (collection) {
    return res.status(200).send(collection);
  }
  res.status(400).redirect('/collections');
};

const update = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const { name } = req.body;
  const collection = await Collection.findByIdAndUpdate(
    id,
    {
      name,
      lastUpdatedAt: new Date(),
    },
    { new: true }
  );
  if (collection) {
    await collection.save();
    return res.status(200).redirect(`/collections/${id}`);
  }
  res.status(400).redirect('/collections');
};

const destroy = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  await Collection.findByIdAndDelete(id);
  res.status(200).redirect('/collections');
};

export default { index, create, read, update, destroy };
