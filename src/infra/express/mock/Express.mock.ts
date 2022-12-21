import { Response, Request, NextFunction } from 'express'

export function getResponseMock() {
    const res: Partial<Response> = {
        set: jest.fn(),
        status: jest.fn((code: number) => res as Response),
        json: jest.fn(),
        send: jest.fn(),
    }

    return res as Response
}

export function getRequestMock() {
    const req: Partial<Request> = {}

    return req as Request
}

export function getNextMock() {
    return jest.fn() as NextFunction
}
