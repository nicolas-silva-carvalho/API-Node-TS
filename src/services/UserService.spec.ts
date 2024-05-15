import { IUser, UserService } from './UserService';

describe('UserService', () => {
    const mockDb: IUser[] = []
    const userService = new UserService(mockDb);

    it('Deve adicionar um novo usuário', () => {
        const mockConsole = jest.spyOn(global.console, 'log');
        userService.createUser('nick', 'nick@gmail.com');
        expect(mockConsole).toHaveBeenCalledWith('DB atualizado', mockDb)
    })
})