import { Request, Response } from "express";
import { ErrorResponse } from "../shared/api/error-response";

export interface RequestHandler<RequestType, ResponseType> {
    handle(request: RequestType): Promise<ResponseType>;
}

export async function useHandler<RequestType, ResponseType>(
    handler: RequestHandler<RequestType, ResponseType>, 
    req: Request<any, any, any>, 
    res: Response<ResponseType | ErrorResponse>,
): Promise<void> {
    const request: RequestType = req.body;

    try {
        const response = await handler.handle(request);
        res.json(response);
    } catch (err) {
        res.status(500).json({message: (err as Error).message});
    }
}
