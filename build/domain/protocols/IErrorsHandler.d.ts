import { Response } from 'express';
export interface IErrorsHandler {
    execute: (error: Error, res: Response) => void;
}
