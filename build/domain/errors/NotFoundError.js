"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const ErrorMessages_1 = require("./ErrorMessages");
const ErrorNames_1 = require("./ErrorNames");
class NotFoundError extends Error {
    constructor(message = ErrorMessages_1.errorMessages.notFound) {
        super(message);
        this.name = ErrorNames_1.ErrorNames.NOT_FOUND;
    }
}
exports.NotFoundError = NotFoundError;
