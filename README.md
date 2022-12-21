# Express Simple Error Handler

Essa biblioteca foi criada a fim de de padronizar e simplificar o tratamento de exceções em aplicações que utilizam `express`. Não é necessário realizar nenhum tipo de configuração prévia para sua execução, porém, o uso do framework [Express](https://www.npmjs.com/package/express) é obrigatório.

Os objetivos da biblioteca são: facilitar e padronizar o tratamento de exceções e permitir o envio de respostas mais flexíveis para cenários de erro.

## Índice

- [Express Simple Error Handler](#express-simple-error-handler)
  - [Índice](#índice)
  - [Instalação](#instalação)
  - [Utilização como objeto](#utilização-como-objeto)
  - [Utilização como middleware](#utilização-como-middleware)
  - [Erros disponíveis](#erros-disponíveis)
    - [BadRequestError](#badrequesterror)
    - [NotFoundError](#notfounderror)
    - [InvalidPasswordError](#invalidpassworderror)
  - [Erros não tratados](#erros-não-tratados)
  - [Contribua](#contribua)

---
## Instalação

Esta é uma biblioteca do [Node.js](https://nodejs.org/download/release/v12.18.2/) disponível por meio do registro [npm](https://www.npmjs.com/).

```bash
$ npm install express-simple-error-handler
```

## Utilização como objeto

Para utilizar a biblioteca é necessário importar o objeto `ErrorHandler`. Através do método `execute` deve ser enviado via parâmetro, o erro capturado e o objeto `response` do [Express](https://www.npmjs.com/package/express).

Caso o erro capturado seja um [erro tratado pela biblioteca](#erros-disponíveis), será enviada uma resposta com seu respectivo ["HTTP Status Code"](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) e uma mensagem, caso o erro não seja identificado pela biblioteca, será enviada uma mensagem de erro interno.

    ```js
    import { ErrorHandler, BadRequestError } from 'express-simple-error-handler'

    async update(req, res, updateRecord) {
        try {
            if (!req.body) {
                throw new BadRequestError('Deve ser enviado um objeto para atualização.')
            }

            const updatedRecord = await updateRecord.execute(req.body)
            res.status(200).json({ data: updatedRecord })
        } catch(err) {
            ErrorHandler.execute(err, res)
        }
    }
    ```

Dado o exemplo, caso não seja enviado um `body` para a requisição, será enviada uma resposta com ["Status Code 400"](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400) e o seguinte formato de mensagem:

    ```json
    { "message": "Deve ser enviado um objeto para atualização." }
    ```

Caso a execução do caso de uso `updateRecord` lance um erro não tratado, a resposta será enviada com ["Status Code 500"](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500) e o seguinte formato de mensagem:

    ```json
    { "message": "Erro interno no servidor." }
    ```

## Utilização como middleware

Também é possível utilizar a biblioteca como um `middleware`. Para isto, é necessário importar a função `errorHandlerMiddleware` e adicionar sua chamada à uma rota/`route` específica, ou dentro do sistema de roteamento/`router`, ou como middleware utilizado pela própria raíz do serviço/`app`.

Para os exemplos que seguirão, será utilizado o seguinte `controller` como referência:

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

1. Implementação na rota/`route`:
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
2. Implementação no sistema de roteamento/`router`:
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
3. Implementação na raíz do serviço/`app`:
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

## Erros disponíveis

Os erros disponibilizados pela biblioteca possuem por padrão uma mensagem pré definida. Esta mensagem será enviada caso, no momento do lançamento da exceção, não seja definida nenhuma mensagem customizada para o erro.
### BadRequestError

- **Mensagem padrão**: "Invalid request."
- **Status Code**: 400

### NotFoundError

- **Mensagem padrão**: "Resource not found."
- **Status Code**: 404

### InvalidPasswordError

- **Mensagem padrão**: "Invalid password."
- **Status Code**: 400

## Erros não tratados

Será tratado como "erro interno" **todo erro** que não for disponibilizado pela biblioteca, desta forma, é importante que ao lançar uma exceção conhecida, o erro utilizado seja disponibilizado pela biblioteca.

- **Mensagem padrão**: "Erro interno no servidor."
- **Status Code**: 500

## Contribua

Para propor melhorias ou adicionar suporte para novos erros, siga os seguintes passos:

1. Implemente a melhoria proposta em uma `branch` seguindo a seguinte nomenclatura:
    - Para **adição de erro** utilize: `feature/newErrorName-userName`
    - Para **adição de multiplos erros** utilize: `feature/errors-userName`
    - Para **proposição de melhoria** utilize: `improvement/methodToBeImproved-userName`
2. Adicione testes unitários para garantir a cobertura funcionalidade da implementada.
3. Abra um [Merge Request](https://docs.gitlab.com/ee/user/project/merge_requests/) seguindo a seguinte nomenclatura:
    - Para **adição de erro** utilize: `Error: newErrorName - userName`
    - Para **adição de multiplos erros** utilize: `Error: new errors - userName`
    - Para **proposição de melhoria** utilize: `Improvement: methodToBeImproved - userName`
