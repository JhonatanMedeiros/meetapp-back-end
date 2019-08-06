import 'dotenv/config';
import path from 'path';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

import sendHttpErrorModule from './app/error/sendHttpError';
import './database';
import routes from './app/routes';

class Server {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(helmet());
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: false }));
    this.server.use(sendHttpErrorModule);
    this.server.use(morgan('dev'));
    this.server.use((req, res, next) => {
      res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, OPTIONS '
      );
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With,' +
          ' Content-Type, Accept,' +
          ' Authorization,' +
          ' Access-Control-Allow-Credentials'
      );
      res.header('Access-Control-Allow-Credentials', 'true');
      next();
    });
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new Server().server;
