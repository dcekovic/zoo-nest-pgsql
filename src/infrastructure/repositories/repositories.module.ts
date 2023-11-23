import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { DatabaseUserRepository } from './user.repository';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/infrastructure/consts/constants';
import { Animal } from '../entities/animal.entity';
import { DatabaseAnimalRepository } from './animal.repository';
import { DatabaseZookeeperRepository } from './zookeeper.repository';
import { Zookeeper } from '../entities/zookeeper.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Animal, Zookeeper]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: process.env.SESSION_TIMEOUT },
    }),
  ],
  providers: [
    DatabaseUserRepository,
    DatabaseAnimalRepository,
    DatabaseZookeeperRepository,
  ],
  exports: [
    DatabaseUserRepository,
    DatabaseAnimalRepository,
    DatabaseZookeeperRepository,
    TypeOrmModule,
  ],
})
export class RepositoriesModule {}
