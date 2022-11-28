const { Router } = require('express');
const { Blog } = require('../models/Blog');
// const authenticate = require('../middleware/authenticate');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const blogs = await Blog.getAll();
      res.json(blogs);
    } catch (e) {
      next(e);
    }
  })
  .get('/:id', async (req, res, next) => {
    res.json({});
  });
