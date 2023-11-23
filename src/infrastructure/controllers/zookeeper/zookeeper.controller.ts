import { Controller, Get, HttpCode, HttpStatus, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/infrastructure/common/guards/auth.guard';
import { GetAllZookeepersByLocation } from 'src/usecases/zookeeper/getAllZookeepersByLocation.usecase';
import { GetAllZookeepersByStatus } from 'src/usecases/zookeeper/getAllZookeepersByStatus.usecase';
import { GetAllZookeepersOlderThan } from 'src/usecases/zookeeper/getAllZookeepersOlderThan.usesace';

@Controller('/zookeeper')
export class ZookeeperController {
  constructor(
    private readonly getAllZookeepersOlderThan: GetAllZookeepersOlderThan,
    private readonly getAllZookeepersByLocation: GetAllZookeepersByLocation,
    private readonly getAllZookeepersByStatus: GetAllZookeepersByStatus,
  ) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Get('/olderThan/:age')
  olderThan(@Param('age') age: number) {
    return this.getAllZookeepersOlderThan.exec(age);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Get('/location/:location')
  byLocation(@Param('location') location: string) {
    return this.getAllZookeepersByLocation.exec(location);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Get('/isActive/:isActive')
  byStatus(@Param('isActive') isActive: boolean) {
    return this.getAllZookeepersByStatus.exec(isActive);
  }
}
