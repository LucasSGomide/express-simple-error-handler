/// <reference types="qs" />
import { ErrorRequestHandler } from 'express';
import { BadRequestError, NotFoundError, InvalidPasswordError, UnauthorizedError, ForbiddenError } from './domain/errors';
import { ErrorsHandler } from './application/errorHandler/ErrorsHandler';
declare const ErrorHandler: ErrorsHandler;
declare const errorHandlerMiddleware: ErrorRequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export { ErrorHandler, errorHandlerMiddleware, BadRequestError, NotFoundError, InvalidPasswordError, UnauthorizedError, ForbiddenError, ErrorsHandler, ErrorRequestHandler, };
