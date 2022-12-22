"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedError = void 0;
const ErrorMessages_1 = require("./ErrorMessages");
const ErrorNames_1 = require("./ErrorNames");
class UnauthorizedError extends Error {
    constructor(message = ErrorMessages_1.errorMessages.unauthorized) {
        super(message);
        this.name = ErrorNames_1.ErrorNames.UNAUTHORIZED;
    }
}
exports.UnauthorizedError = UnauthorizedError;
