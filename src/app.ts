import express, { Request, Response, NextFunction } from 'express';

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

/* 
  TODO
  1. preHandler 구현
   1) 모든 api 요청 URL, Method 로깅
     - 현재 각 Route마다 logger 코드 삽입 -> 더 상위단에서 사용할 수 있는 방법 고민
  
  2. postHandler 구현
   1) 모든 response 형식 통일화

  3. ErrorHandler 구현
   1) reponse 형식 및 ERROR Code 전달

*/