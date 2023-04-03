import { transcriptionDTO } from './interfaces/transcription.interface';
import { TranscriptionService } from './services/transcription.service';
import { VideoService } from './services/video.service';
import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import * as fs from 'fs';
import path from 'path';
import { ClassifierService } from './services/classifier.service';

@Controller('analyze')
export class ClassifierController {
  constructor(
    private classifierService: ClassifierService
  ) {}

  @Post()
  async transcribeVideo(@Body() req: transcriptionDTO, @Res() res: Response) {

    const analysis = await this.classifierService.categorize(req.transcription)
    res.status(200).send(analysis);
    
  }
}
