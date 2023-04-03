import { ClassifierService } from "./services/classifier.service";
import { videoDTO } from "./dto/yt-video";
import { TranscriptionService } from "./services/transcription.service";
import { VideoService } from "./services/video.service";
import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { Response } from "express";
import * as fs from "fs";

@Controller("video")
export class VideoController {
  constructor(
    private videoService: VideoService,
    private transcriptionService: TranscriptionService,
    private classifierService: ClassifierService
  ) {}

  @Post()
  async transcribeVideo(@Body() videoDTO: videoDTO, @Res() res: Response) {
    const message: any = await this.videoService.download(videoDTO);

    if (message.status === 200) {
      try {
        if (fs.existsSync(message.videoLocation)) {
          // Call the transcription service to transcribe the video
          const video = await this.transcriptionService.getText(
            `${message.videoLocation}`
          );

          const text = video.transcription;

          video.categories = await this.classifierService.categorize(text);

          // Delete file
          fs.unlink(message.videoLocation, (error) => {
            return error;
          });

          res.status(200).send(video);
        }
      } catch (e) {
        return e;
      }
    } else {
      res.status(500).send(message); // Send the error message as the response
    }
  }
}
