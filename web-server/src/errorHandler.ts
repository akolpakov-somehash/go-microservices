import { Request, Response, NextFunction } from 'express';

function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    console.error(err);
    res.status(500).send('Something went wrong');
}

export default errorHandler;