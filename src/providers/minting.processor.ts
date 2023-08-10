import { Job } from 'bull';
import { Process, Processor } from '@nestjs/bull';

@Processor('minting')
export class MintingConsumer {
  @Process('mint-token')
  async mint(job: Job) {
    console.log('Start to mint...');
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 5000);
    });
    console.log(job.data);
    console.log('minting completed!!');
  }
}
