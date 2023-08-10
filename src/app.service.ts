import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class AppService {
  constructor(@InjectQueue('minting') private readonly mintingQueue: Queue) {}
  getHello(): string {
    return 'Hello World!';
  }

  mintToken() {
    this.mintingQueue.add('mint-token', {
      name: 'Nest',
      logo: 'https://nestjs.com/img/logo_text.svg',
    });

    return 'Token minting request has been sent!';
  }
}
