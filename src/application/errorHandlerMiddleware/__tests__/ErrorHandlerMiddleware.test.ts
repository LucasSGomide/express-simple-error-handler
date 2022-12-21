import { ErrorRequestHandler, NextFunction, Request, Response } from 'express'
import { BadRequestError } from '../../../domain/errors/BadRequestError'
import { createErrorHandler } from '../../../config/CreateErrorHandler'
import { HttpStatusCode } from '../../../domain/http/HttpStatusCode'
import { getNextMock, getRequestMock, getResponseMock } from '../../../infra/express/mock/Express.mock'
import { ErrorHandlerMiddleware } from '../ErrorHandlerMiddleware'

type SutTypes = {
    middleware: ErrorRequestHandler
    request: Request
    response: Response
    next: NextFunction
}

function makeSut(): SutTypes {
    const errorHandler = createErrorHandler()
    const middleware = ErrorHandlerMiddleware.build(errorHandler).getMiddleware()
    const request = getRequestMock()
    const response = getResponseMock()
    const next = getNextMock()

    return {
        middleware,
        request,
        response,
        next
    }
}

describe('ErrorHandlerMiddleware', () => {
    it('Deve responder corretamente quando um erro conhecido for lançado', () => {
        const { middleware, request, response, next } = makeSut()
        const error = new BadRequestError()

        middleware(error, request, response, next)

        expect(response.status).toBeCalledTimes(1)
        expect(response.status).toBeCalledWith(HttpStatusCode.BAD_REQUEST)
        expect(response.json).toBeCalledTimes(1)
        expect(response.json).toBeCalledWith({ message: error.message })
    })

    it('Deve responder corretamente quando um erro desconhecido for lançado', () => {
        const { middleware, request, response, next } = makeSut()
        const error = new Error()

        middleware(error, request, response, next)

        expect(response.status).toBeCalledTimes(1)
        expect(response.status).toBeCalledWith(HttpStatusCode.INTERNAL_ERROR)
        expect(response.json).toBeCalledTimes(1)
        expect(response.json).toBeCalledWith({ message: 'Erro interno no servidor.' })
    })
})
