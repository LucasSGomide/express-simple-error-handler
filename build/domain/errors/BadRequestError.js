"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = void 0;
class BadRequestError extends Error {
    constructor(message = 'Requisição inválida.') {
        super(message);
        this.name = 'BAD_REQUEST';
    }
}
exports.BadRequestError = BadRequestError;
