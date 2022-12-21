import { Response } from 'express'
import { HttpStatusCode } from '../../domain/http/HttpStatusCode'
import { IErrorHandler, IErrorsHandler } from '../../domain/protocols'

export class ErrorsHandler implements IErrorsHandler {
    private constructor(private readonly handlers: IErrorHandler[]) {}

    static build(handlers: IErrorHandler[]): ErrorsHandler {
        return new ErrorsHandler(handlers)
    }

    execute(error: Error, res: Response): void {
        const filteredHandler = this.handlers.find(
            (handler) => handler.errorName === error.name
        )

        if (!filteredHandler) {
            res.status(HttpStatusCode.INTERNAL_ERROR).json({
                message: 'Erro interno no servidor.',
            })
            return
        }

        const { message, statusCode } = filteredHandler.handle(error)
        res.status(statusCode).json({ message })
    }
}
