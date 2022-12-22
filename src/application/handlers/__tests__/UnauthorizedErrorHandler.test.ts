import { UnauthorizedError } from '../../../domain/errors/UnauthorizedError'
import { errorMessages } from '../../../domain/errors/ErrorMessages'
import { HttpStatusCode } from '../../../domain/http/HttpStatusCode'
import { UnauthorizedErrorHandler } from '../UnauthorizedErrorHandler'

describe('UnauthorizedErrorHandler', () => {
    it('Deve receber um UnauthorizedError e retornar status 401 com a mensagem "Invalid credentials."', () => {
        const sut = new UnauthorizedErrorHandler()

        const handledError = sut.handle(new UnauthorizedError())

        expect(handledError.message).toBe(errorMessages.unauthorized)
        expect(handledError.statusCode).toBe(HttpStatusCode.UNAUTHORIZED)
    })

    it('Deve receber um UnauthorizedError e retornar status 401 com mensagem customizada."', () => {
        const sut = new UnauthorizedErrorHandler()

        const handledError = sut.handle(
            new UnauthorizedError('Custom error message.')
        )

        expect(handledError.message).toBe('Custom error message.')
        expect(handledError.statusCode).toBe(HttpStatusCode.UNAUTHORIZED)
    })
})
