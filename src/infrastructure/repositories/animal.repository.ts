import { AnimalRepository } from 'src/domain/repositories/animal.repository.interface';
import { Animal } from '../entities/animal.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThanOrEqual, Repository } from 'typeorm';
import { AnimalModel } from 'src/domain/model/animal.model';

@Injectable()
export class DatabaseAnimalRepository implements AnimalRepository {
  constructor(
    @InjectRepository(Animal)
    private readonly animalRepository: Repository<Animal>,
  ) {}
  
  async getAllAnimalsByGender(gender: string): Promise<AnimalModel[]> {
    const result: AnimalModel[] = [];
    const animals: Animal[] = await this.animalRepository.find({
      where: {
        gender: MoreThanOrEqual(gender),
      },
    });
    animals.forEach((element) => {
      result.push(this.toAnimal(element));
    });
    return result;
  }
  async getAllAnimalsByLocation(location: string): Promise<AnimalModel[]> {
    const result: AnimalModel[] = [];
    const animals: Animal[] = await this.animalRepository.find({
      where: {
        location: MoreThanOrEqual(location),
      },
    });
    animals.forEach((element) => {
      result.push(this.toAnimal(element));
    });
    return result;
  }

  async getAllAnimalsOlderThan(age: number): Promise<AnimalModel[]> {
    const result: AnimalModel[] = [];
    const animals: Animal[] = await this.animalRepository.find({
      where: {
        age: MoreThanOrEqual(age),
      },
    });
    animals.forEach((element) => {
      result.push(this.toAnimal(element));
    });
    return result;
  }

  private toAnimal(animalEntity: Animal): AnimalModel {
    const animalModel: AnimalModel = new AnimalModel();
    animalModel.id = animalEntity.id;
    animalModel.name = animalEntity.name;
    animalModel.type = animalEntity.type;
    animalModel.age = animalEntity.age;
    animalModel.gender = animalEntity.gender;
    return animalModel;
  }
}
