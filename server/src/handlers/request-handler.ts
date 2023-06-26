import { Request, Response } from "express";
import { ErrorResponse } from "../shared/api/error-response";

export interface RequestHandler<RequestType, ResponseType> {
    handle(request: RequestType): Promise<ResponseType>;
}

export function useHandler<RequestType, ResponseType>(
    handler: RequestHandler<RequestType, ResponseType>, 
    req: Request<any, any, any>, 
    res: Response<ResponseType | ErrorResponse>,
) {
    const request: RequestType = req.body;

    handler.handle(request)
        .then((response) => res.json(response))
        .catch((err) => res.status(500).json({message: err.message}))
}
