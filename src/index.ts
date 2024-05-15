import express, { Request, Response } from 'express';
import { UserController } from './controllers/UserController';
import { router } from './routes';

const userController = new UserController()

const server = express();
server.use(router)

server.use(express.json())

server.get('/', (request: Request, response: Response) => {
    return response.status(200).json({ message: 'DioBank API OK'})
})

server.listen(5000, () => console.log('Server on'))
