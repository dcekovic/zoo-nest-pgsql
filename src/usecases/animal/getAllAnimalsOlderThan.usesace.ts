import { Injectable } from '@nestjs/common';
import { DatabaseAnimalRepository } from 'src/infrastructure/repositories/animal.repository';

@Injectable()
export class GetAllAnimalsOlderThan {
  constructor(private animalRepository: DatabaseAnimalRepository) {}

  async exec(value: number) {
    return await this.animalRepository.getAllAnimalsOlderThan(value);
  }
}
