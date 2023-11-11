import { Characteristics } from './characteristic.entity';
import { Zookeeper } from './zookeeper.entity';
export declare class Animal {
    id: number;
    name: string;
    type: string;
    age: number;
    location: string;
    gender: string;
    characteristics: Characteristics[];
    zookeeper: Zookeeper;
}
