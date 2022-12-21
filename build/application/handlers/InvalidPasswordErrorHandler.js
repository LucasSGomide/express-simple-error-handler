"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidPasswordErrorHandler = void 0;
const InvalidPasswordError_1 = require("../../domain/errors/InvalidPasswordError");
const HttpStatusCode_1 = require("../../domain/http/HttpStatusCode");
class InvalidPasswordErrorHandler {
    constructor() {
        this.errorName = new InvalidPasswordError_1.InvalidPasswordError().name;
    }
    handle(error) {
        return {
            message: error.message,
            statusCode: HttpStatusCode_1.HttpStatusCode.BAD_REQUEST,
        };
    }
}
exports.InvalidPasswordErrorHandler = InvalidPasswordErrorHandler;
