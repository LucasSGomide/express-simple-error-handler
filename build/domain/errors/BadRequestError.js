"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = void 0;
const ErrorMessages_1 = require("./ErrorMessages");
const ErrorNames_1 = require("./ErrorNames");
class BadRequestError extends Error {
    constructor(message = ErrorMessages_1.errorMessages.badRequest) {
        super(message);
        this.name = ErrorNames_1.ErrorNames.BAD_REQUEST;
    }
}
exports.BadRequestError = BadRequestError;
