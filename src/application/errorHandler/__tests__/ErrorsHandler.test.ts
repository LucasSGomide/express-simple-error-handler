import { HttpStatusCode } from '../../../domain/http/HttpStatusCode'
import { IErrorHandler } from '../../../domain/protocols'
import { ErrorsHandler } from '../ErrorsHandler'
import { getResponseMock } from '../../../infra/express/mock/Express.mock'

class AnyErrorHandlerMock implements IErrorHandler {
    errorName = new Error().name

    constructor(
        private readonly statusCode: number,
        private readonly customErrorName: string
    ) {}

    handle(error: Error) {
        this.errorName = this.customErrorName

        return {
            message: error.message,
            statusCode: this.statusCode,
        }
    }
}

describe('ErrorsHandler', () => {
    it('Deve retornar status e mensagem corretas para erro desconhecido"', () => {
        const response = getResponseMock()
        const sut = ErrorsHandler.build([])

        sut.execute(new Error(), response)

        expect(response.status).toBeCalledWith(HttpStatusCode.INTERNAL_ERROR)
        expect(response.json).toBeCalledWith({
            message: 'Erro interno no servidor.',
        })
    })

    it('Deve retornar status e mensagem corretas para um erro que possui tratamento"', () => {
        const errorName = 'ANY_ERROR_NAME'
        const statusCode = Math.floor(Math.random() * 100)
        const errorHandlerMock = new AnyErrorHandlerMock(statusCode, errorName)

        const response = getResponseMock()
        const sut = ErrorsHandler.build([errorHandlerMock])

        sut.execute(new Error('ANY_MESSAGE'), response)

        expect(errorHandlerMock.errorName).toBe(errorName)
        expect(response.status).toBeCalledWith(statusCode)
        expect(response.json).toBeCalledWith({ message: 'ANY_MESSAGE' })
    })
})
