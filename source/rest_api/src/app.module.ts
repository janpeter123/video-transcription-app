import { ClassifierService } from './services/classifier.service';
import { TranscriptionService } from './services/transcription.service';
import { VideoService } from './services/video.service';
import { Module } from '@nestjs/common';
import { VideoController } from './video.controller';
import { ClassifierController } from './nlu.controller';
import { DemoController } from './demo.controller';

@Module({
  imports: [],
  controllers: [VideoController,ClassifierController,DemoController],
  providers: [VideoService,TranscriptionService,ClassifierService],
})
export class AppModule {}
