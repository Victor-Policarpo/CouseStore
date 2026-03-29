import path from 'path';
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.resolve('src/static/login.html'));
});


router.post('/', (req, res) => {
    const { username, password } = req.body;
    
    if (username === 'admin' && password === '1234') { 
        req.session.userLogged = true;
        return res.status(200).json({ message: 'Logado com sucesso' });
    } else {
        return res.status(401).json({ error: 'Credenciais inválidas' });
    }
});

export default router;