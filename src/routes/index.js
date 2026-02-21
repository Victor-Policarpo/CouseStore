import Router from 'express';
import loginRouter from './login.js';

const mainRouter = Router();

mainRouter.get("/", (req, res) => {
  res.redirect("/login");
});

mainRouter.use("/login", loginRouter);

export default mainRouter;