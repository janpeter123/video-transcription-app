import { videoDTO } from './../dto/yt-video';
import { TranscriptionService } from './transcription.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Video } from 'src/interfaces/video.interface';
import * as fs from 'fs';
import * as ytdl from 'ytdl-core';
import * as path from 'path';

@Injectable()
export class VideoService {
  private videoFilename: string;
  private durationSeconds: number;
  private timeLimit: number = 300;

  async download(video: videoDTO) {
    try {
      //Get Video Info
      const videoInfo: any = await ytdl.getInfo(video.url);

      //Get Video format
      const videoFormats = ytdl.filterFormats(videoInfo.formats, 'audioonly');
      const videoFormat = ytdl.chooseFormat(videoFormats, {
        quality: 'highestaudio',
      });

      //Get filename
      let filename = videoInfo.videoDetails.title;
      this.durationSeconds = parseInt(videoInfo.videoDetails.lengthSeconds);
      console.log(videoInfo.videoDetails.lengthSeconds)

      if (this.durationSeconds <= this.timeLimit) {
        //Normalize filename
        //Replace everything that considered special with non special characters
        //Replace spaces with underlines
        filename = filename.replace(/[^\w\s]/gi, '').replace(/\s+/g, '_');

        //Set video FileName
        this.videoFilename = `${filename}.webm`;
        const videoLocation = path.join('./downloads', this.videoFilename);
        const videoWriteStream = fs.createWriteStream(videoLocation);

        //Download video on determined format
        ytdl(video.url, { format: videoFormat }).pipe(videoWriteStream);

        return new Promise((resolve, reject) => {
          videoWriteStream.on('finish', () => {
            resolve({
              status: 200,
              videoLocation: videoLocation,
              message: "Ok"
            });
          });
          videoWriteStream.on('error', (err) => {
            reject(err);
          });
        });
      } else {
        return { status: 403, message: 'Video Too Long' };
      }
    } catch (error) {
      throw new HttpException(
        'Failed to download video',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
