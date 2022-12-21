import { NotFoundError } from '../../domain/errors'
import { HttpStatusCode } from '../../domain/http/HttpStatusCode'
import { IErrorHandler } from '../../domain/protocols'

export class NotFoundErrorHandler implements IErrorHandler {
    errorName: string = new NotFoundError().name

    handle(error: Error) {
        return {
            message: error.message,
            statusCode: HttpStatusCode.NOT_FOUND,
        }
    }
}
