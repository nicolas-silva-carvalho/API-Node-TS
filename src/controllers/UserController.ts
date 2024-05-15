import { UserService } from './../services/UserService';
import { Request, Response } from "express";

export class UserController {
  userService: UserService

  constructor(userService = new UserService()){
    this.userService = userService;
  }

  createUser = (request: Request, response: Response) => {
    const user = request.body;

    if (!user.name){
        return response.status(400).json({ message: 'Bad Request: name invalid'})
    }

    if (!user.email){
      return response.status(400).json({ message: 'Bad Request: e-mail invalid'})
  }

    this.userService.createUser(user.name, user.email)
    return response.status(201).json({ message: "Created" });
  };

  getAllUsers = (request: Request, response: Response) => {
    const users = this.userService.getAllUsers()
    return response.status(200).json( users )
  }

  deleteUser = (request: Request, response: Response) => {
    const { email } = request.params
    var del = this.userService.deleteUser(email);

    if(del){
      return response.json( {message: 'User deleted successfully'} )
    }

    return response.status(404).json({ message: 'User not found' });
  }
}
