import { videoDTO } from './dto/yt-video';
import { TranscriptionService } from './services/transcription.service';
import { VideoService } from './services/video.service';
import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import * as fs from 'fs';
import path from 'path';

@Controller('video')
export class VideoController {
  constructor(
    private videoService: VideoService,
    private transcriptionService: TranscriptionService,
  ) {}

  @Post()
  async transcribeVideo(@Body() videoDTO: videoDTO, @Res() res: Response) {
    
    const message :any = await this.videoService.download(videoDTO);

    if (message.status === 200) {
      try {
        
        if (fs.existsSync(message.videoLocation)) {
          
        // Call the transcription service to transcribe the video
          const transcriptionResult = await this.transcriptionService.getText(
            `${message.videoLocation}`,
          );

          // Send the transcription result as the response

          fs.unlink(message.videoLocation, (error) => {
            return error;
          });

          res.status(200).send(transcriptionResult);
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      res.status(500).send(message); // Send the error message as the response
    }
  }
}
