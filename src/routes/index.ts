import { notFound } from "../middlewares/handle_errors";

export default function initRoutes(app: any) {
    app.use('/', notFound);
}