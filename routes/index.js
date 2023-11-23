import express from 'express';

import tasksRouter from './posts/index.js';

const router = express.Router();

router.get('/', (req, res, next) => {
  const responseBody = {
    'status': 200,
    'message': 'Hello, Tasks :)',
  }
  return res.status(200).send(responseBody);
});

router.use('/tasks', tasksRouter);

export default router;
