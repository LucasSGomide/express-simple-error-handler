"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestErrorHandler = void 0;
const errors_1 = require("../../domain/errors");
const HttpStatusCode_1 = require("../../domain/http/HttpStatusCode");
class BadRequestErrorHandler {
    constructor() {
        this.errorName = new errors_1.BadRequestError().name;
    }
    handle(error) {
        return {
            message: error.message,
            statusCode: HttpStatusCode_1.HttpStatusCode.BAD_REQUEST,
        };
    }
}
exports.BadRequestErrorHandler = BadRequestErrorHandler;
