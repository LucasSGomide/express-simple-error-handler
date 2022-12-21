"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createErrorHandlerMiddleware = void 0;
const ErrorHandlerMiddleware_1 = require("../application/errorHandlerMiddleware/ErrorHandlerMiddleware");
const CreateErrorHandler_1 = require("./CreateErrorHandler");
function createErrorHandlerMiddleware() {
    const errorHandler = (0, CreateErrorHandler_1.createErrorHandler)();
    return ErrorHandlerMiddleware_1.ErrorHandlerMiddleware.build(errorHandler).getMiddleware();
}
exports.createErrorHandlerMiddleware = createErrorHandlerMiddleware;
