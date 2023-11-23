import express from 'express';

const router = express.Router();

/**
 * GET /tasks - Get all tasks
 * POST /tasks - Create a task
 */
router.route('/')
  .get((req, res, next) => {
    const responseBody = [
      {
        id: 1,
        content: 'This is content. 1',
      },
      {
        id: 2,
        content: 'This is content. 2',
      }
    ]
    return res.status(200).send(responseBody);
  })
  .post((req, res, next) => {
    const { content } = req.body;
    const responseBody = {
      'content': content,
    }
    return res.status(201).send(responseBody);
  });


/**
 * PATCH /tasks/:id - Update a task
 * DELETE /tasks/:id - Delete a task
 */
router.route('/:id')
  .get((req, res, next) => {
    const { id } = req.params;
    // get post
    const responseBody = {
      'id': parseInt(id),
      'content': 'This is content.',
    }
    return res.status(200).send(responseBody);
  })
  .patch((req, res, next) => {
    const { id } = req.params;
    // update post
    const responseBody = {
      'id': parseInt(id),
      'content': req.body.content,
    }
    return res.status(200).send(responseBody);
  })
  .delete((req, res, next) => {
    const { id } = req.params;
    // delete post
    return res.status(204).send();
  });

export default router;
