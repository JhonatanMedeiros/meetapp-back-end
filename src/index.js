import { createServer } from 'http';
import { onClose, onError, onListening } from './config/serverHandlers';
import ExpressServer from './server';

const port = process.env.PORT || 3333;

const Server = createServer(ExpressServer);

Server.listen(port);

Server.on('error', error => onError(error, port));
Server.on('listening', onListening.bind(Server));
Server.on('close', () => onClose());
