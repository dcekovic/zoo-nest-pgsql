import { Injectable } from "@nestjs/common";
import { DatabaseZookeeperRepository } from "src/infrastructure/repositories/zookeeper.repository";

@Injectable()
export class GetAllZookeepersByStatus {
  constructor(private zookeeperRepository: DatabaseZookeeperRepository) {}

  async exec(isActive: boolean) {
    return await this.zookeeperRepository.getAllZookeepersByStatus(isActive);
  }
}
