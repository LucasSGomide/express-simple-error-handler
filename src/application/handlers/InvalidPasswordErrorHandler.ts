import { InvalidPasswordError } from '../../domain/errors/InvalidPasswordError'
import { HttpStatusCode } from '../../domain/http/HttpStatusCode'
import { IErrorHandler } from '../../domain/protocols'

export class InvalidPasswordErrorHandler implements IErrorHandler {
    errorName: string = new InvalidPasswordError().name

    handle(error: Error) {
        return {
            message: error.message,
            statusCode: HttpStatusCode.BAD_REQUEST,
        }
    }
}
