import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/crud-user", homeController.getCrudUser);
  router.post("/post-crud-user", homeController.postCrudUser);
  return app.use("/", router);
};

export default initWebRoutes;
