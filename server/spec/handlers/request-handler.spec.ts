import { Request, Response } from "express";
import { RequestHandler, useHandler } from "../../src/handlers/request-handler";
import { ErrorResponse } from "../../src/shared/api/error-response";

describe('useHandler', () => {
    let request: Request<any, any, any>;
    let response: Response<string | ErrorResponse>;
    let handler: RequestHandler<number, string>;

    beforeEach(() => {
        request = {} as Request<any, any, any>;
        response = {} as Response<string | ErrorResponse>;
        handler = {} as RequestHandler<number, string>;
    });

    test('will return the response', async () => {
        request.body = 123;

        response.json = jest.fn();
        handler.handle = jest.fn().mockReturnValue(Promise.resolve('foobar'));

        await useHandler(handler, request, response);

        expect(handler.handle).toHaveBeenCalledWith(request.body);
        expect(response.json).toHaveBeenCalledWith('foobar');
    });

    test('will return the error when rejected', async () => {
        request.body = 123;

        response.json = jest.fn();
        response.status = jest.fn().mockReturnValue(response);
        handler.handle = jest.fn().mockReturnValue(Promise.reject(new Error('Boom')));

        await useHandler(handler, request, response);

        expect(handler.handle).toHaveBeenCalledWith(request.body);
        expect(response.status).toHaveBeenCalledWith(500);
        expect(response.json).toHaveBeenCalledWith({
            'message': 'Boom',
        });
    });
});
