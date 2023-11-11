import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Characteristics } from './characteristic.entity';
import { Zookeeper } from './zookeeper.entity';

@Entity()
export class Animal {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column('varchar', { length: 255 })
  name: string;

  @Column('varchar', { length: 100 })
  type: string;

  @Column('numeric', { precision: 3, scale: 0 })
  age: number;

  @Column('varchar', { length: 100 })
  location: string;

  @Column('varchar', { length: 2 })
  gender: string;

  @OneToMany(() => Characteristics, (characteristic) => characteristic.animal)
  characteristics: Characteristics[];

  @ManyToOne(() => Zookeeper, (zookeeper) => zookeeper.animal)
  zookeeper: Zookeeper;
}
