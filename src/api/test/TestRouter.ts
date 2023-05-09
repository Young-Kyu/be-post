import { RequestHandler, Router } from "express";
import { getTestUserId } from "./TestController";

const testRouter = Router();

const logger: RequestHandler = (req, res, next) => {
  console.log('Time:', Date.now());
  next();
}
testRouter.get('/', logger, getTestUserId);

module.exports = testRouter;
