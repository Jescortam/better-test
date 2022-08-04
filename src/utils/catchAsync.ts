import express from 'express';

export default (
  func: (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => any
) => {
  return (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    func(req, res, next).catch(next);
  };
};
