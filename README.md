# Express Simple Error Handler


This library was created to standardize and simplify exception treatment across Express.js applications. There is no extra configuration required before install it, but [Express.js](https://www.npmjs.com/package/express) is mandatory.

Goal: simplify and standardize exception treatment and allow a range of responses on error scenarios.

## Index

- [Express Simple Error Handler](#express-simple-error-handler)
  - [Index](#index)
  - [Install](#install)
  - [Use as an object](#use-as-an-object)
  - [Use as a middleware](#use-as-a-middleware)
  - [Available errors](#available-errors)
    - [BadRequestError](#badrequesterror)
    - [InvalidPasswordError](#invalidpassworderror)
    - [UnauthorizedError](#unauthorizederror)
    - [NotFoundError](#notfounderror)
  - [Unknown errors](#unknown-errors)
  - [Contribute](#contribute)

---
## Install

This is a [Node.js](https://nodejs.org/download/release/v12.18.2/) library and it's available through [npm](https://www.npmjs.com/) registry.

```bash
$ npm install express-simple-error-handler
```

## Use as an object

Errors in your application can be effectively managed through the `execute` method of an `ErrorHandler` object. This method requires two parameters: the caught error and an express `response` object.

When the caught error is ["exported from the library"](#available-errors), the `ErrorHandler` will automatically send a default response. This response includes an appropriate ["HTTP Status Code"](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) and a message specified in the error object. If the caught error is not exported from the library, then a default "internal error" response will be sent.


    ```js
    import { ErrorHandler, BadRequestError } from 'express-simple-error-handler'

    async update(req, res, updateRecord) {
        try {
            if (!req.body) {
                throw new BadRequestError('A record should be sent to update.')
            }

            const updatedRecord = await updateRecord.execute(req.body)
            res.status(200).json({ data: updatedRecord })
        } catch(err) {
            ErrorHandler.execute(err, res)
        }
    }
    ```

In the provided example, if a `body` is missing from the `request`, the `ErrorHandler` will automatically generate a `response` with ["Status Code 400"](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400) along with the following `JSON` object:

    ```json
    { "message": "A record should be sent to update." }
    ```

On the other hand, if the `updateRecord` use case throws an unknown error, the `ErrorHandler` will generate a `response` with ["Status Code 500"](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500) along with the following `JSON` object:

    ```json
    { "message": "Internal Error." }
    ```

## Use as a middleware

It's also possible to manage errors in the application through an `errorHandlerMiddleware`. There are several implementation options, including calling it within a specific `route`, incorporating it into the routing system (`router`), or placing it at the application root.

The provided examples below demonstrate the implementation of the `errorHandlerMiddleware` with the referenced `controller`:

    ```js
    import { ErrorHandler, BadRequestError } from 'express-simple-error-handler'

    export function recordController(updateRecord) {
        return () => ({
            async update(req, res, next) {
                try {
                    if (!req.body) {
                        throw new BadRequestError('Deve ser enviado um objeto para atualização.')
                    }

                    const updatedRecord = await updateRecord.execute(req.body)
                    res.status(200).json({ data: updatedRecord })
                } catch(err) {
                    next(err)
                }
            }
        })
    }
    ```

Implementations:

1. `Route`:
    ```js
    import express from 'express'
    import { errorHandlerMiddleware } from 'express-simple-error-handler'
    import { recordController } from './RecordController'
    import { updateRecord } from '../useCase/updateRecord'

    const app = express()
    const recordController = recordController(updateRecord)

    app.patch('/updateRecord', recordController.update, errorHandlerMiddleware)
    app.listen(3000)
    ```
2. Routing system (`router`):
    ```js
    import * as express from 'express'
    import { errorHandlerMiddleware } from 'express-simple-error-handler'
    import { recordController } from './RecordController'
    import { updateRecord } from '../useCase/updateRecord'


    const router = express.Router()
    const recordController = recordController(updateRecord)

    export function recordsRouter() {
        router.patch('/updateRecord', recordController.update)
        router.use(errorHandlerMiddleware)
    }
    ```
3. Application root:
    ```js
    import express from 'express'
    import { errorHandlerMiddleware } from 'express-simple-error-handler'
    import { recordController } from './RecordController'
    import { updateRecord } from '../useCase/updateRecord'

    const app = express()
    const recordController = recordController(updateRecord)

    app.patch('/updateRecord', recordController.update)
    app.use(errorHandlerMiddleware)

    app.listen(3000)
    ```

## Available errors

The following errors are available to be thrown. Each error has by default a ["HTTP status code"](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) and a built in message. If a custom message is not specified by the user, then the built in message will be sent along with the status code.

### BadRequestError

- **Default Message**: "Invalid request."
- **Status Code**: 400

### InvalidPasswordError

- **Default Message**: "Invalid password."
- **Status Code**: 401
### UnauthorizedError

- **Default Message**: "Invalid credentials."
- **Status Code**: 401

### NotFoundError

- **Default Message**: "Resource not found."
- **Status Code**: 404

## Unknown errors

**Any error** thrown by the application that is not exported by the library will be considered an "unknown error" and will be handled as an "internal error".

- **Default Message**: "Internal error."
- **Status Code**: 500

## Contribute

Feel free to contribute to the library!

For improvement suggestions or new error additions, follow the step by step guide below:

1. Push the improvement code to a `branch` named with the following rule:
    - **Error adition**: `feature/error-addition-user-name`
    - **Improvements**: `improvement/user-name`
2. Don't forget to write unit tests to ensure that the implemented feature or improvement is working as expected.
3. Open a [Merge Request](https://docs.gitlab.com/ee/user/project/merge_requests/) following the naming rule below:
    - **Error adition**: `Error: new-error-name(s) - user-name`
    - **Improvements**: `Improvement: short-improvement-description - user-name`
