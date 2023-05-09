const express = require('express');
const router = express.Router();
const postService = require('#service/post/PostService');
const winston = require('winston');
const logger = winston.createLogger();

import { RequestHandler } from 'express';

export const getPostController: RequestHandler = (req, res, next) => {

}


// router.get('/db/:id', (req: any, res) => {
//   let id = req.params.id;
//   console.log(id);
//   conn.query(`SELECT * FROM POST WHERE title like '%${id}%'`,
//     function (err: any, rows: any, fileds: any) {
//       if (!err) {
//         res.send(rows);
//       } else {
//         res.send(err);
//       }
//     }
//   );
// });



// app.get('/db2', (req: any, res) => {
//   let id = req.query.id;
//   console.log(id);
//   conn.query(`SELECT * FROM POST WHERE title like '%${id}%'`,
//     function (err: any, rows: any, fileds: any) {
//       if (!err) {
//         res.send(rows);
//       } else {
//         res.send(err);
//       }
//     }
//   );
// });
