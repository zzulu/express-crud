import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
  const responseBody = {
    'status': 200,
    'message': 'Welcome to the beginning of nothingness.',
  }
  res.status(200).send(responseBody);
});

export default router;
