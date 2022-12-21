"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandlerMiddleware = void 0;
class ErrorHandlerMiddleware {
    constructor(errorHandler) {
        this.errorHandler = errorHandler;
    }
    static build(errorHandler) {
        return new ErrorHandlerMiddleware(errorHandler);
    }
    getMiddleware() {
        return (error, request, response, next) => {
            console.error(error);
            this.errorHandler.execute(error, response);
        };
    }
}
exports.ErrorHandlerMiddleware = ErrorHandlerMiddleware;
