export class NotFoundError extends Error {
    constructor(message = 'Registro não encontrado.') {
        super(message)

        this.name = 'NOT_FOUND'
    }
}
