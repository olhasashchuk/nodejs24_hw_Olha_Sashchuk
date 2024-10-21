import { Controller, Get, Ip } from '@nestjs/common';

@Controller('request')
export class RequestController {
  @Get('ip')
  getIp(@Ip() ip: string) {
    return `Client IP: ${ip}`;
  }
}
