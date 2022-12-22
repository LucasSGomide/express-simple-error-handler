"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedErrorHandler = void 0;
const UnauthorizedError_1 = require("../../domain/errors/UnauthorizedError");
const HttpStatusCode_1 = require("../../domain/http/HttpStatusCode");
class UnauthorizedErrorHandler {
    constructor() {
        this.errorName = new UnauthorizedError_1.UnauthorizedError().name;
    }
    handle(error) {
        return {
            message: error.message,
            statusCode: HttpStatusCode_1.HttpStatusCode.UNAUTHORIZED,
        };
    }
}
exports.UnauthorizedErrorHandler = UnauthorizedErrorHandler;
