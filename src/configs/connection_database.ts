import { Dialect, Sequelize } from "sequelize";
import * as dotenv from 'dotenv';
dotenv.config()
const sequelize = new Sequelize(
    process.env.DB_DATABASE as string,
    process.env.DB_USERNAME as string,
    process.env.DB_PASSWORD as string,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_CONNECTION as Dialect,
        port: Number(process.env.DB_PORT),
        logging: false,
    }
);

const connectionDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export default connectionDatabase;