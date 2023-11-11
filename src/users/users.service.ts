import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/infrastructure/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userEntity: Repository<User>,
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.userEntity.findOneBy({ username: username });
  }
}
