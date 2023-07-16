import createHttpError from "http-errors"

export const badRequest = (req: any, res: any, err?: any) => {
    const error = createHttpError.BadRequest(err)
    return res.status(error.status).json({
        status: error.status,
        message: error.message
    })
}

export const unprocessableEntity = (req: any, res: any, err?: any) => {
    const error = createHttpError.UnprocessableEntity(err)
    return res.status(error.status).json({
        status: error.status,
        message: error.message
    })
}

export const internalServerError = (req: any, res: any, err?: any) => {
    const error = createHttpError.InternalServerError(err)
    return res.status(error.status).json({
        status: error.status,
        message: error.message
    })
}

export const notFound = (req: any, res: any, err?: any) => {
    const error = createHttpError.NotFound(err)
    return res.status(error.status).json({
        status: error.status,
        message: "This route is not defined"
    })
}

export const unAuthorization = (req: any, res: any, err?: any) => {
    const error = createHttpError.Unauthorized(err)
    return res.status(error.status).json({
        status: error.status,
        message: error.message
    })
}

export const forbidden = (req: any, res: any, err?: any) => {
    const error = createHttpError.Forbidden(err)
    return res.status(error.status).json({
        status: error.status,
        message: error.message
    })
}