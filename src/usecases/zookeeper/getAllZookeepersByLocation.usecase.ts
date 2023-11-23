import { Injectable } from "@nestjs/common";
import { DatabaseZookeeperRepository } from "src/infrastructure/repositories/zookeeper.repository";

@Injectable()
export class GetAllZookeepersByLocation {
  constructor(private zookeeperRepository: DatabaseZookeeperRepository) {}

  async exec(location: string) {
    return await this.zookeeperRepository.getAllZookeepersByLocation(location);
  }
}
