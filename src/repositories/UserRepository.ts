import { User } from './../entities/User';
import { EntityManager } from "typeorm";

export class UserRepository {
    private manager: EntityManager;

    constructor(manager: EntityManager) {
        this.manager = manager;
    }

    createUser = async (user: User): Promise<User> => {
        return await this.manager.save(user);
    }

    getUser = async (userId: string): Promise<User | null> => {
        return this.manager.findOne(User, {
            where: {
                id_user: userId
            }
        })
    }
}
