import path from 'path';
import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (username === 'admin' && password === '1234') { 
        req.session.userLogged = true;
        res.redirect('./private/home');
    } else {
        res.redirect('/login');
    }
});

router.get('/', (req, res) => {
    res.render(path.resolve('src/views/public/login.ejs'));
});

export default router;