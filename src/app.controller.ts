import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  mintToken() {
    this.appService.mintToken();
    return 'Token minting request has been sent!';
  }
}
