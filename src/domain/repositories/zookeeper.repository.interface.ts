import { ZookeeperModel } from '../model/zookeeper.model';

export interface ZookeeperRepository {
  getAllZookeepersOlderThan(value: number): Promise<ZookeeperModel[]>;

  getAllZookeepersByStatus(isActive: boolean): Promise<ZookeeperModel[]>;

  getAllZookeepersByLocation(location: string): Promise<ZookeeperModel[]>;
}
