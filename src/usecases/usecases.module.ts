import { Module } from '@nestjs/common';
import { LoginUseCase } from './auth/login.usecase';
import { RepositoriesModule } from 'src/infrastructure/repositories/repositories.module';
import { GetAllAnimalsOlderThan } from './animal/getAllAnimalsOlderThan.usesace';
import { GetAllZookeepersOlderThan } from './zookeeper/getAllZookeepersOlderThan.usesace';
import { GetAllAnimalsByGender } from './animal/getAllAnimalsByGender.usecase';
import { GetAllAnimalsByLocation } from './animal/getAllAnimalsByLocation.usecase';
import { GetAllZookeepersByStatus } from './zookeeper/getAllZookeepersByStatus.usecase';
import { GetAllZookeepersByLocation } from './zookeeper/getAllZookeepersByLocation.usecase';

@Module({
  imports: [RepositoriesModule],
  providers: [
    LoginUseCase,
    GetAllAnimalsOlderThan,
    GetAllAnimalsByGender,
    GetAllAnimalsByLocation,
    GetAllZookeepersOlderThan,
    GetAllZookeepersByLocation,
    GetAllZookeepersByStatus,
  ],
  exports: [
    LoginUseCase,
    GetAllAnimalsOlderThan,
    GetAllAnimalsByGender,
    GetAllAnimalsByLocation,
    GetAllZookeepersOlderThan,
    GetAllZookeepersByLocation,
    GetAllZookeepersByStatus,
  ],
})
export class UseCasesModule {}
