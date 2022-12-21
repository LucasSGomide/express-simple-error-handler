import { Response } from 'express';
import { IErrorHandler, IErrorsHandler } from '../../domain/protocols';
export declare class ErrorsHandler implements IErrorsHandler {
    private readonly handlers;
    private constructor();
    static build(handlers: IErrorHandler[]): ErrorsHandler;
    execute(error: Error, res: Response): void;
}
