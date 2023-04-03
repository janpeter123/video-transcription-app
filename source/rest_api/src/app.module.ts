import { TranscriptionService } from './services/transcription.service';
import { VideoService } from './services/video.service';
import { Module } from '@nestjs/common';
import { VideoController } from './video.controller';

@Module({
  imports: [],
  controllers: [VideoController],
  providers: [VideoService,TranscriptionService],
})
export class AppModule {}
