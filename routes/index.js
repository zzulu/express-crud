import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
  const response = {
    'status': 'OK',
  }
  res.status(200).send(response);
});

export default router;
