import { ForbiddenError } from '../../domain/errors'
import { HttpStatusCode } from '../../domain/http/HttpStatusCode'
import { IErrorHandler } from '../../domain/protocols'

export class ForbiddenErrorHandler implements IErrorHandler {
    errorName: string = new ForbiddenError().name

    handle(error: Error) {
        return {
            message: error.message,
            statusCode: HttpStatusCode.FORBIDDEN,
        }
    }
}
