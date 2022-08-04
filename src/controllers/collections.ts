import express from 'express';
import Collection from '../models/Collection';
import User from '../models/User';

const index = async (req: express.Request, res: express.Response) => {
  let collections = await Collection.find();
  res.status(200).send(collections);
};

const create = async (req: express.Request, res: express.Response) => {
  const { name } = req.body;
  const collection = new Collection({
    name,
    flashcards: [],
    author: req.user!._id,
    createdAt: new Date(),
    lastUpdatedAt: new Date(),
  });
  await collection.save();
  const { _id } = collection;
  const user = await User.findByIdAndUpdate(
    req.user!._id,
    //@ts-ignore
    { $push: { ownCollections: collection._id } },
    { new: true }
  );
  req.flash('success', 'Collection successfully made');
  res.status(201).redirect(`/collections/${_id}`);
};

const read = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const collection = await Collection.findById(id);
  res.status(200).send(collection);
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
  await collection!.save();
  req.flash('success', 'Collection successfully updated');
  res.status(200).redirect(`/collections/${id}`);
};

const destroy = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  await Collection.findByIdAndDelete(id);
  req.flash('success', 'Collection successfully deleted');
  res.status(200).redirect('/collections');
};

export default { index, create, read, update, destroy };
