import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { LoginUseCase } from 'src/usecases/auth/login.usecase';

@Controller('/auth')
export class AuthController {
  constructor(private readonly loginUseCase: LoginUseCase) {}

  @HttpCode(HttpStatus.OK)
  @Post('/login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.loginUseCase.login(signInDto.username, signInDto.password);
  }
}
