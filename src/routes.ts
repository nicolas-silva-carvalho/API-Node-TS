import { Router } from 'express';
import { UserController } from './controllers/UserController';
import { LoginController } from './controllers/LoginController';

export const router = Router();

const userController = new UserController();
const loginController = new LoginController();

router.post('/user', userController.createUser);
// router.get('/user', userController.getAllUsers);
router.delete('/user', userController.deleteUser);

router.post('/login', loginController.login)
