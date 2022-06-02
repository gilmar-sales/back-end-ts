import express, { NextFunction, Request, Response } from 'express'
import routes from './routes';

const server = express()

server.set('port', 3000);
server.use('/', routes)

export default server;