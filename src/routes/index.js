import Router from 'express';
import loginRouter from './login.js';
import privateRoutes from './private.js';
import courseRoutes from './courseRoutes.js';

const mainRouter = Router();

mainRouter.get("/", (req, res) => {
  res.redirect("/login");
});

mainRouter.use("/login", loginRouter);
mainRouter.use("/private", privateRoutes)
mainRouter.use("/courses", courseRoutes);
mainRouter.use("/", privateRoutes);
export default mainRouter;