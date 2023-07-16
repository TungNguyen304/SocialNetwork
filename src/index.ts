import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import initRoutes from './routes'
import connectionDatabase from './configs/connection_database';

dotenv.config();
const app = express();
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'DELETE', 'PUT']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initRoutes(app);
connectionDatabase();

const PORT = process.env.PORT || 8888

const listener = app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})
