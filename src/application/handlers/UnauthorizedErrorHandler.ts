import { UnauthorizedError } from '../../domain/errors/UnauthorizedError'
import { HttpStatusCode } from '../../domain/http/HttpStatusCode'
import { IErrorHandler } from '../../domain/protocols'

export class UnauthorizedErrorHandler implements IErrorHandler {
    errorName: string = new UnauthorizedError().name

    handle(error: Error) {
        return {
            message: error.message,
            statusCode: HttpStatusCode.UNAUTHORIZED,
        }
    }
}
