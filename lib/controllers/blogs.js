const { Router } = require('express');
const { Blog } = require('../models/Blog');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const blog = await Blog.getById(req.params.id);
      await blog.addComments();
      res.json(blog);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const blogs = await Blog.getAll();
      res.json(blogs);
    } catch (e) {
      next(e);
    }
  });
