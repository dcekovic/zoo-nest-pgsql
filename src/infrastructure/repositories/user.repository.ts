import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from 'src/domain/model/user.model';
import { UserRepository } from 'src/domain/repositories/user.repository.interface';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class DatabaseUserRepository implements UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userEntityRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async findUserByUsernameAndPassword(
    username: string,
    password: string,
  ): Promise<UserModel> {
    const adminUserEntity = await this.userEntityRepository.findOne({
      where: {
        username: username,
        password: password,
      },
    });
    if (!adminUserEntity) {
      return null;
    }
    return this.toUser(adminUserEntity);
  }

  async login(username: string, password: string) {
    const user = await this.findUserByUsernameAndPassword(username, password);
    if (user == null) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  private toUser(adminUserEntity: User): UserModel {
    const adminUser: UserModel = new UserModel();
    adminUser.id = adminUserEntity.id;
    adminUser.username = adminUserEntity.username;
    adminUser.password = adminUserEntity.password;
    adminUser.role = adminUserEntity.role;
    return adminUser;
  }
}
