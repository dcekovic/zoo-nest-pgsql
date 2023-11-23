import { Controller, Get, HttpCode, HttpStatus, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/infrastructure/common/guards/auth.guard';
import { GetAllAnimalsByGender } from 'src/usecases/animal/getAllAnimalsByGender.usecase';
import { GetAllAnimalsByLocation } from 'src/usecases/animal/getAllAnimalsByLocation.usecase';
import { GetAllAnimalsOlderThan } from 'src/usecases/animal/getAllAnimalsOlderThan.usesace';

@Controller('/animal')
export class AnimalController {
  constructor(
    private readonly getAllAnimalsOlderThan: GetAllAnimalsOlderThan,
    private readonly getAnimalsByGender: GetAllAnimalsByGender,
    private readonly getAnimalsByLocation: GetAllAnimalsByLocation,
  ) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Get('/olderThan/:age')
  olderThan(@Param('age') age: number) {
    return this.getAllAnimalsOlderThan.exec(age);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Get('/gender/:gender')
  byGender(@Param('gender') gender: string) {
    return this.getAnimalsByGender.exec(gender);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Get('/location/:location')
  byLocation(@Param('location') location: string) {
    return this.getAnimalsByLocation.exec(location);
  }
}
