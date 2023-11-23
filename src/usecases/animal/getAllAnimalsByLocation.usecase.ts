import { Injectable } from "@nestjs/common";
import { DatabaseAnimalRepository } from "src/infrastructure/repositories/animal.repository";

@Injectable()
export class GetAllAnimalsByLocation {
  constructor(private animalRepository: DatabaseAnimalRepository) {}

  async exec(gender: string) {
    return await this.animalRepository.getAllAnimalsByLocation(gender);
  }
}
