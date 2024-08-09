import express from 'express';
import helmet from 'helmet';
import * as dotenv from 'dotenv'
import instructorRouter from './routes/instructorRouter';
import studentRouter from './routes/studentRouter';
import courseRouter from './routes/courseRouter';

const server = express();

dotenv.config();

server.use(express.json());
server.use(express.urlencoded({extended:true}));

server.use(helmet());

server.use(studentRouter);
server.use(instructorRouter);
server.use(courseRouter);

server.listen(process.env.PORT);

