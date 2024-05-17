import { EntityManager } from 'typeorm';
import { getMockEntityManager } from '../__mocks__/mockEntityManager.mock';
import { User } from '../entities/User';
import { UserRepository } from './UserRepository';

describe('UserRepository', () => {
    let userRepository: UserRepository;
    let managerMock: Partial<EntityManager>;

    const mockUser = new User('Nicolas', 'Teste@gmial.com', '12345678')

    beforeAll(async () => {
        managerMock = await getMockEntityManager({ saveReturn: mockUser });
        userRepository = new UserRepository(managerMock as EntityManager);
    });

    it('Deve cadastrar um novo usuário no banco de dados', async () => {
        const response = await userRepository.createUser(mockUser);
        expect(managerMock.save).toHaveBeenCalled();
        expect(response).toMatchObject(mockUser)
    });
});
