import { User } from 'src/infrastructure/entities/user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private userEntity;
    constructor(userEntity: Repository<User>);
    findOne(username: string): Promise<User | undefined>;
}
