import { BadRequestError } from '../../../domain/errors'
import { HttpStatusCode } from '../../../domain/http/HttpStatusCode'
import { BadRequestErrorHandler } from '../BadRequestErrorHandler'

describe('BadRequestErrorHandler', () => {
    it('Deve receber um NotFoundError e retornar status 404 com a mensagem "Registro não encontrado."', () => {
        const sut = new BadRequestErrorHandler()

        const handledError = sut.handle(new BadRequestError())

        expect(handledError.message).toBe('Requisição inválida.')
        expect(handledError.statusCode).toBe(HttpStatusCode.BAD_REQUEST)
    })

    it('Deve receber um BadRequestError e retornar status 404 com mensagem customizada."', () => {
        const sut = new BadRequestErrorHandler()

        const handledError = sut.handle(
            new BadRequestError('Custom error message.')
        )

        expect(handledError.message).toBe('Custom error message.')
        expect(handledError.statusCode).toBe(HttpStatusCode.BAD_REQUEST)
    })
})
