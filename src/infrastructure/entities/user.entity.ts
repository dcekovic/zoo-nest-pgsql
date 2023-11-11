import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column('varchar', { length: 100 })
  username: string;

  @Column('varchar', { length: 100 })
  password: string;

  @Column('varchar', { length: 100 })
  role: string;
}
