import express from 'express';
import { IndexRequest, SecondRequest } from './IndexType';

export { };

declare global {
  namespace Express {
    interface Request {
      index: import('./IndexType').IndexRequest,
      second: import('./IndexType').SecondRequest,
    }
  }
}
