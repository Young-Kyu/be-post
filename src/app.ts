import express, { Request, Response, NextFunction } from 'express';
import { RootRequest } from './types/RootType';
import { IndexRequest } from './types/index/IndexType';

const router = express.Router();


const postService = require('#service/post/PostService');
const winston = require('winston');
const logger = winston.createLogger();

const postRoute = require('./api/post/PostRouter');
const testRoute = require('./api/test/TestRouter');
const app = express();


app.use(express.json()); // 요청 바디를 파싱하는 코드

app.use('/post', postRoute);
app.use('/user', testRoute);

app.listen(4000, () => {
  console.log('server started');
})