import { NotFoundError } from '../../../domain/errors'
import { errorMessages } from '../../../domain/errors/ErrorMessages'
import { HttpStatusCode } from '../../../domain/http/HttpStatusCode'
import { NotFoundErrorHandler } from '../NotFoundErrorHandler'

describe('NotFoundErrorHandler', () => {
    it('Deve receber um NotFoundError e retornar status 404 com a mensagem "Registro não encontrado."', () => {
        const sut = new NotFoundErrorHandler()

        const handledError = sut.handle(new NotFoundError())

        expect(handledError.message).toBe(errorMessages.notFound)
        expect(handledError.statusCode).toBe(HttpStatusCode.NOT_FOUND)
    })

    it('Deve receber um NotFoundError e retornar status 404 com mensagem customizada."', () => {
        const sut = new NotFoundErrorHandler()

        const handledError = sut.handle(
            new NotFoundError('Custom error message.')
        )

        expect(handledError.message).toBe('Custom error message.')
        expect(handledError.statusCode).toBe(HttpStatusCode.NOT_FOUND)
    })
})
