"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundErrorHandler = void 0;
const errors_1 = require("../../domain/errors");
const HttpStatusCode_1 = require("../../domain/http/HttpStatusCode");
class NotFoundErrorHandler {
    constructor() {
        this.errorName = new errors_1.NotFoundError().name;
    }
    handle(error) {
        return {
            message: error.message,
            statusCode: HttpStatusCode_1.HttpStatusCode.NOT_FOUND,
        };
    }
}
exports.NotFoundErrorHandler = NotFoundErrorHandler;
