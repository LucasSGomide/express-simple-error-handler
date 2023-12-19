"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForbiddenErrorHandler = void 0;
const errors_1 = require("../../domain/errors");
const HttpStatusCode_1 = require("../../domain/http/HttpStatusCode");
class ForbiddenErrorHandler {
    constructor() {
        this.errorName = new errors_1.ForbiddenError().name;
    }
    handle(error) {
        return {
            message: error.message,
            statusCode: HttpStatusCode_1.HttpStatusCode.FORBIDDEN,
        };
    }
}
exports.ForbiddenErrorHandler = ForbiddenErrorHandler;
