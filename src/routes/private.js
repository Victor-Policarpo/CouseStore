import Router from 'express';
import auth from '../middlewares/auth.js';
import courses from '../data/courses.js';
import path from 'path';

const router = Router();

router.get('/home',auth,  (req, res) => {
  res.render(path.resolve('src/views/private/home.ejs'), { courses });
});

export default router;