import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bull';
import { MintingConsumer } from './providers/minting.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'minting',
    }),
    BullModule.forRootAsync({
      useFactory: () => ({
        redis: {
          host: 'localhost',
          port: 6379,
        },
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, MintingConsumer],
})
export class AppModule {}
