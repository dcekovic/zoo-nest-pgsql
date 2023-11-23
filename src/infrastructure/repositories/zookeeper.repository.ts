import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ZookeeperRepository } from 'src/domain/repositories/zookeeper.repository.interface';
import { Zookeeper } from '../entities/zookeeper.entity';
import { ZookeeperModel } from 'src/domain/model/zookeeper.model';
import { MoreThanOrEqual, Repository } from 'typeorm';

@Injectable()
export class DatabaseZookeeperRepository implements ZookeeperRepository {
  constructor(
    @InjectRepository(Zookeeper)
    private readonly zookeeperRepository: Repository<Zookeeper>,
  ) {}
  async getAllZookeepersByStatus(isActive: boolean): Promise<ZookeeperModel[]> {
    const result: ZookeeperModel[] = [];
    const zookeepers: Zookeeper[] = await this.zookeeperRepository.find({
      where: {
        isActive: MoreThanOrEqual(isActive),
      },
    });
    zookeepers.forEach((element) => {
      result.push(this.toZookeeper(element));
    });
    return result;
  }

  async getAllZookeepersByLocation(location: string): Promise<ZookeeperModel[]> {
    const result: ZookeeperModel[] = [];
    const zookeepers: Zookeeper[] = await this.zookeeperRepository.find({
      where: {
        location: MoreThanOrEqual(location),
      },
    });
    zookeepers.forEach((element) => {
      result.push(this.toZookeeper(element));
    });
    return result;
  }

  async getAllZookeepersOlderThan(value: number): Promise<ZookeeperModel[]> {
    const result: ZookeeperModel[] = [];
    const zookeepers: Zookeeper[] = await this.zookeeperRepository.find({
      where: {
        age: MoreThanOrEqual(value),
      },
    });
    zookeepers.forEach((element) => {
      result.push(this.toZookeeper(element));
    });
    return result;
  }

  private toZookeeper(zookeeperEntity: Zookeeper): ZookeeperModel {
    const zookeeperModel: ZookeeperModel = new ZookeeperModel();
    zookeeperModel.id = zookeeperEntity.id;
    zookeeperModel.name = zookeeperEntity.name;
    zookeeperModel.age = zookeeperEntity.age;
    zookeeperModel.isActive = zookeeperEntity.isActive;
    zookeeperModel.location = zookeeperEntity.location;
    return zookeeperModel;
  }
}
