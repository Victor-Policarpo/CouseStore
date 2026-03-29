import { Router } from 'express';
import auth from '../middlewares/auth.js';
import path from 'path';

const router = Router();

router.get('/home', auth, (req, res) => {
  res.sendFile(path.resolve('src/views_html/home.html'));
});

router.get('/course/:id', auth, (req, res) => {
  res.sendFile(path.resolve('src/views_html/courseDetails.html'));
});

router.get('/edit/:id', auth, (req, res) => {
    res.sendFile(path.resolve('src/views_html/editCourse.html'));
});

router.get('/create', auth, (req, res) => {
    res.sendFile(path.resolve('src/views_html/createCourse.html'));
});

router.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
          console.log("Error destroying session:", err);
          return res.redirect('/private/home');
        }
        res.redirect('/login');
    });
});

export default router;