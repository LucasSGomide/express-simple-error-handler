import { errorMessages } from '../../../domain/errors/ErrorMessages'
import { InvalidPasswordError } from '../../../domain/errors/InvalidPasswordError'
import { HttpStatusCode } from '../../../domain/http/HttpStatusCode'
import { InvalidPasswordErrorHandler } from '../InvalidPasswordErrorHandler'

describe('InvalidPasswordErrorHandler', () => {
    it('Deve receber um NotFoundError e retornar status 400 com a mensagem "Invalid password."', () => {
        const sut = new InvalidPasswordErrorHandler()

        const handledError = sut.handle(new InvalidPasswordError())

        expect(handledError.message).toBe(errorMessages.invalidPassword)
        expect(handledError.statusCode).toBe(HttpStatusCode.UNAUTHORIZED)
    })

    it('Deve receber um BadRequestError e retornar status 400 com mensagem customizada."', () => {
        const sut = new InvalidPasswordErrorHandler()

        const handledError = sut.handle(
            new InvalidPasswordError('Custom error message.')
        )

        expect(handledError.message).toBe('Custom error message.')
        expect(handledError.statusCode).toBe(HttpStatusCode.UNAUTHORIZED)
    })
})
