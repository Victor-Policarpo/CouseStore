import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (username === 'admin' && password === '1234') { 
        req.session.userLogged = true;
        res.redirect('/private/home.html');
    } else {
        res.redirect('/login.html');
    }
});

router.get('/', (req, res) => {
    res.redirect('/login.html');
});

export default router;