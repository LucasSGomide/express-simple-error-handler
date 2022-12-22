"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createErrorHandler = void 0;
const ErrorsHandler_1 = require("../application/errorHandler/ErrorsHandler");
const handlers_1 = require("../application/handlers");
function createErrorHandler() {
    return ErrorsHandler_1.ErrorsHandler.build([
        new handlers_1.BadRequestErrorHandler(),
        new handlers_1.NotFoundErrorHandler(),
        new handlers_1.InvalidPasswordErrorHandler(),
        new handlers_1.UnauthorizedErrorHandler(),
    ]);
}
exports.createErrorHandler = createErrorHandler;
