import express from 'express';
import session from 'express-session';
import mainRouter from './src/routes/index.js';
import auth from './src/middlewares/auth.js'
const app = express();
app.use(session({
    secret:'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6Ik5hZ2dhc2FraWkiLCJleHAiOjE3NzE2OTg3MzEsImlhdCI6MTc3MTY5ODczMX0.A9qd5ZBkaGJAz5hOWgSDPw929ZNArkMUCLRG6aK_gMM',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure: false, 
        httpOnly: true,
        maxAge: 3600000
     }
}))
app.use(express.urlencoded({ extended: true }));

app.use(express.static('src/static'));
app.use(express.static('src/templates/public'));
app.use('/private', auth, express.static('src/templates/private'));
app.use(mainRouter);
app.listen(3000, () => {
  console.log('Server is running...');
});
