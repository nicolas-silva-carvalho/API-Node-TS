import { UserService } from './../services/UserService';
import { Request, Response } from "express";

export class UserController {
  userService: UserService;

  constructor(userService = new UserService()) {
    this.userService = userService;
  }

  createUser = (request: Request, response: Response): Response => {
    const user = request.body;

    if (!user.name || !user.email || !user.password) {
        return response.status(400).json({ message: 'Bad Request: name, email, password invalid' });
    }

    this.userService.createUser(user.name, user.email, user.password);
    return response.status(201).json({ message: "Created" });
  };

  getUser = (request: Request, response: Response) => {
    return response.status(200);
  }

  deleteUser = (request: Request, response: Response) => {
    const { email } = request.body; // Use request.body to get email from DELETE request body

    if (!email) {
        return response.status(400).json({ message: 'Bad Request: email is required' });
    }

    const del = this.userService.deleteUser(email);
    return response.status(200).json({ message: 'User deleted successfully' });
  }
}
