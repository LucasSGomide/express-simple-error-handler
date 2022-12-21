import { BadRequestError } from '../../domain/errors'
import { HttpStatusCode } from '../../domain/http/HttpStatusCode'
import { IErrorHandler } from '../../domain/protocols'

export class BadRequestErrorHandler implements IErrorHandler {
    errorName: string = new BadRequestError().name

    handle(error: Error) {
        return {
            message: error.message,
            statusCode: HttpStatusCode.BAD_REQUEST,
        }
    }
}
