import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from './animal.entity';

@Entity()
export class Characteristics {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ array: true })
  food: string;

  @Column('varchar', { length: 100 })
  colour: string;

  @Column('boolean')
  isDangerous: boolean;

  @Column('numeric', { precision: 4, scale: 0 })
  weight: number;

  @Column('varchar', { length: 100 })
  enclosure: string;

  @ManyToOne(() => Animal, (animal) => animal.characteristics)
  animal: Animal;
}
