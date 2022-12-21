"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
class NotFoundError extends Error {
    constructor(message = 'Registro não encontrado.') {
        super(message);
        this.name = 'NOT_FOUND';
    }
}
exports.NotFoundError = NotFoundError;
