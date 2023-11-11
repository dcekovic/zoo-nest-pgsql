import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Animal } from './animal.entity';

@Entity()
export class Zookeeper {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column('varchar', { length: 255 })
  name: string;

  @Column('numeric', { precision: 3, scale: 0 })
  age: number;

  @Column('varchar', { length: 255 })
  location: string;

  @Column('boolean')
  isActive: boolean;

  @OneToMany(() => Animal, (animal) => animal.zookeeper)
  animal: Animal[];
}
