"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorsHandler = void 0;
const HttpStatusCode_1 = require("../../domain/http/HttpStatusCode");
class ErrorsHandler {
    constructor(handlers) {
        this.handlers = handlers;
    }
    static build(handlers) {
        return new ErrorsHandler(handlers);
    }
    execute(error, res) {
        const filteredHandler = this.handlers.find((handler) => handler.errorName === error.name);
        if (!filteredHandler) {
            res.status(HttpStatusCode_1.HttpStatusCode.INTERNAL_ERROR).json({
                message: 'Erro interno no servidor.',
            });
            return;
        }
        const { message, statusCode } = filteredHandler.handle(error);
        res.status(statusCode).json({ message });
    }
}
exports.ErrorsHandler = ErrorsHandler;
