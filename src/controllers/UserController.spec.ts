import { makeMockResponse } from "../__mocks__/mockResponse.mock";
import { UserService } from "../services/UserService";
import { UserController } from "./UserController";
import { Request } from "express";

const mockUserService = {
  createUser: jest.fn()
}

jest.mock('../services/UserService', () => {
  return {
    UserService: jest.fn().mockImplementation(() => {
      return mockUserService
    })
  }
})

describe("UserController", () => {
  const mockUserService: Partial<UserService> = {
    createUser: jest.fn(),
  };

  const userController = new UserController();
  const mockResponse = makeMockResponse();

  it("Deve adicionar um novo usuário", () => {
    const mockRequest = {
      body: {
        name: "Nick",
        email: "nick@gmail.com",
        password: "123456"
      },
    } as Request;

    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(201);
    expect(mockResponse.state.json).toMatchObject({
      message: "Created"
    });
  });

  it("Deve retornar erro caso o usuário não informe o password", () => {
    const mockRequest = {
      body: {
        name: 'Nick',
        email: 'nick@gmail.com',
        passwaord: ''
      }
    } as Request;

    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(400);
    expect(mockResponse.state.json).toMatchObject({
      message: 'Bad Request: name, email, password invalid'
    });
  });

  it("Deve retornar erro caso o usuário não informe o email", () => {
    const mockRequest = {
      body: {
        name: 'Nick',
        email: '',
        passwaord: 'nick@gmail.com'
      }
    } as Request;

    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(400);
    expect(mockResponse.state.json).toMatchObject({
      message: 'Bad Request: name, email, password invalid'
    });
  });

  it("Deve retornar erro caso o usuário não informe o name", () => {
    const mockRequest = {
      body: {
        name: '',
        email: 'nick@gmail.com',
        passwaord: 'nick@gmail.com'
      }
    } as Request;

    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(400);
    expect(mockResponse.state.json).toMatchObject({
      message: 'Bad Request: name, email, password invalid'
    });
  });
});
