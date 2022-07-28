import express from 'express';
const app: express.Application = express();

const PORT: number = 8000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
