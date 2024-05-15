import { makeMockRequest } from "../__mocks__/mockRequest.mock";
import { makeMockResponse } from "../__mocks__/mockResponse.mock";
import { UserService } from "../services/UserService";
import { UserController } from "./UserController";

describe("UserController", () => {
  const mockUserService: Partial<UserService> = {};
  const userController = new UserController(mockUserService as UserService);

  it('Deve adicionar um novo usuário', () => {
      const mockRequest = makeMockRequest({})
      const mockResponse = makeMockResponse()
  })
});
