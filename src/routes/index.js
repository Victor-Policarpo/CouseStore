import Router from 'express';
import loginRouter from './login.js';
import privateRoutes from './private.js';

const mainRouter = Router();

mainRouter.get("/", (req, res) => {
  res.redirect("/login");
});

mainRouter.use("/login", loginRouter);
mainRouter.use("/private", privateRoutes)

export default mainRouter;