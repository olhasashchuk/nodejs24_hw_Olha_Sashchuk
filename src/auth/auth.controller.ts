import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInUserDto } from './dto/sign-in-user.dto';
import { AccessTokenGuard } from 'src/guards/access-token.guard';
import { Request } from 'express';
import { RefreshTokenGuard } from 'src/guards/refresh-token.guard';
import { SignUpUserDto } from './dto/sign-up-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  async signup(@Body() signUpUserDto: SignUpUserDto) {
    return this.authService.signUp(signUpUserDto);
  }

  @Post('sign-in')
  async signin(@Body() signInUserDto: SignInUserDto) {
    return this.authService.signIn(signInUserDto);
  }

  @UseGuards(AccessTokenGuard)
  @Post('logout')
  async logout(@Req() req: Request) {
    this.authService.logout(req.user['sub'])
  }

  @UseGuards(RefreshTokenGuard)
  @Post('refresh')
  async refreshTokens(@Req() req: Request) {
    const userId = req.user['sub'];
    const refreshToken = (req.user['refreshToken']);
    return this.authService.refreshTokens(userId, refreshToken)
  }
  



 
}
