"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidPasswordError = void 0;
const ErrorMessages_1 = require("./ErrorMessages");
const ErrorNames_1 = require("./ErrorNames");
class InvalidPasswordError extends Error {
    constructor(message = ErrorMessages_1.errorMessages.invalidPassword) {
        super(message);
        this.name = ErrorNames_1.ErrorNames.INVALID_PASSWORD;
    }
}
exports.InvalidPasswordError = InvalidPasswordError;
