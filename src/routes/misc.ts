import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('Hello');
});

router.get('*', (req, res) => {
  // PAGE NOT FOUND
  res.send('PAGE NOT FOUND');
});

export default router;
