import express from 'express';

const router = express.Router();

/**
 * GET /posts - Get all posts
 * POST /posts - Create a post
 */
router.route('/')
  .get((req, res, next) => {
    const responseBody = [
      {
        id: 1,
        title: 'This is title. 1',
        content: 'This is content. 1',
      },
      {
        id: 2,
        title: 'This is title. 2',
        content: 'This is content. 2',
      }
    ]
    return res.status(200).send(responseBody);
  })
  .post((req, res, next) => {
    const { title, content } = req.body;
    const responseBody = {
      'title': title,
      'content': content,
    }
    return res.status(201).send(responseBody);
  });


/**
 * PATCH /posts/:id - Update a post
 * DELETE /posts/:id - Delete a post
 */
router.route('/:id')
  .get((req, res, next) => {
    const { id } = req.params;
    // get post
    const responseBody = {
      'id': parseInt(id),
      'title': 'This is title.',
      'content': 'This is content.',
    }
    return res.status(200).send(responseBody);
  })
  .patch((req, res, next) => {
    const { id } = req.params;
    // update post
    const responseBody = {
      'id': parseInt(id),
      'title': req.body.title,
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
