import { NextFunction, Request, Response } from "express";
import { internalServerError, forbidden, unAuthorization } from "./handle_errors";

export const verifyRoleAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req.body.user.role_id === 1) next();
        else return forbidden(req, res);
    } catch (error) {
        return internalServerError(error, res);
    }
}

export const verifyRoleAdminOrModerator = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req.body.user.role_id === 1 || req.body.user.role_id === 2) next();
        else return forbidden(req, res);
    } catch (error) {
        return internalServerError(error, res);
    }
}