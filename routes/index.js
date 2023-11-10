import express from 'express';

import postsRouter from './posts/index.js';

const router = express.Router();

router.get('/', (req, res, next) => {
  const responseBody = {
    'status': 200,
    'message': 'Welcome to the beginning of nothingness.',
  }
  res.status(200).send(responseBody);
});

router.use('/posts', postsRouter);

export default router;
