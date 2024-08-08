import express from 'express';
import helmet from 'helmet';
import * as dotenv from 'dotenv'

const server = express();

dotenv.config();

server.use(express.json());
server.use(express.urlencoded({extended:true}));

server.use(helmet());

server.listen(process.env.PORT);

