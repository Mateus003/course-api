import express from 'express';
import helmet from 'helmet';
import * as dotenv from 'dotenv'
import studentRouter from './routes/studentRouter';

const server = express();

dotenv.config();

server.use(express.json());
server.use(express.urlencoded({extended:true}));

server.use(helmet());

server.use(studentRouter);

server.listen(process.env.PORT);

