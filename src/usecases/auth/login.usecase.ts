import { Injectable } from '@nestjs/common';
import { DatabaseUserRepository } from 'src/infrastructure/repositories/user.repository';

@Injectable()
export class LoginUseCase {
  constructor(private userRepository: DatabaseUserRepository) {}

  async login(username: string, password: string) {
    console.log('userRepository:', this.userRepository);
    return await this.userRepository.login(username, password);
  }
}
