import { AnimalModel } from '../model/animal.model';

export interface AnimalRepository {
  getAllAnimalsOlderThan(age: number): Promise<AnimalModel[]>;

  getAllAnimalsByGender(gender: string): Promise<AnimalModel[]>;

  getAllAnimalsByLocation(location: string): Promise<AnimalModel[]>;
}
