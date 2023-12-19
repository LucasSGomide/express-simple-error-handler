"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForbiddenError = void 0;
const ErrorMessages_1 = require("./ErrorMessages");
const ErrorNames_1 = require("./ErrorNames");
class ForbiddenError extends Error {
    constructor(message = ErrorMessages_1.errorMessages.forbidden) {
        super(message);
        this.name = ErrorNames_1.ErrorNames.FORBIDDEN;
    }
}
exports.ForbiddenError = ForbiddenError;
