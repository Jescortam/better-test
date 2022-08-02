import express from 'express';
import Collection from '../models/Collection';
import User from '../models/User';

const router = express.Router();

router
  .route('/')
  .get(async (req, res) => {
    let collections = await Collection.find();
    if (!collections) {
      collections = [];
    }
    res.status(200).send(collections);
  })
  .post(async (req, res) => {
    const { name } = req.body;
    const collection = new Collection({
      name,
      flashcards: null,
      author: req.user!._id,
      createdAt: new Date(),
      lastUpdatedAt: new Date(),
    });
    if (!collection) {
      res.status(400).redirect('/collections');
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
      res.status(400).redirect('/collections');
    }
    res.status(201).redirect(`/collections/${_id}`);
  });

router
  .route('/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    const collection = await Collection.findById(id);
    if (collection) {
      res.status(200).send(collection);
    }
    res.status(400).redirect('/collections');
  })
  .put(async (req, res) => {
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
      res.status(200).redirect(`/collections/${id}`);
    }
    res.status(400).redirect('/collections');
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    await Collection.findByIdAndDelete(id);
    res.status(200).redirect('/collections');
  });

export default router;
