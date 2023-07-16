import { NextFunction, Request, Response } from "express";
import { internalServerError, unAuthorization } from "./handle_errors";
import jwt, { TokenExpiredError } from 'jsonwebtoken';

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization;
        if (!token) return unAuthorization(req, res);
        try {
            const decoded: any = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET as string);
            req.body.user = decoded;
            next();
        } catch(error) {
            if (error instanceof TokenExpiredError) return unAuthorization(req, res, "Access token was expired")
            return unAuthorization(req, res, "Access token is not valid")
        }
    } catch (error) {
        return internalServerError(error, res);
    }
}