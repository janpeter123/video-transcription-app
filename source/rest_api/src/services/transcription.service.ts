import { transcriptionDTO } from './../interfaces/transcription.interface';

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import axios from 'axios';
import * as path from 'path';

@Injectable()
export class TranscriptionService {
  private data: Buffer;
  private transcriptionResults: Array<String> = [];
  private transcriptionDTO: transcriptionDTO;

  constructor() {
    this.transcriptionDTO = { transcription: '',categories:[]};
  }

  async getText(filePath: string) {
    try {
      const url = `${process.env.STT_URL}/v1/recognize?model=pt-BR_Multimedia`;
      const headers = {
        'Content-Type': 'audio/webm',
      };

      if (fs.existsSync(filePath)) {
        //read file
        this.data = await fs.readFileSync(path.join(filePath));

        const response = await axios.post(url, this.data, {
          auth: {
            username: 'apikey',
            password: process.env.STT_API_KEY,
          },
          headers,
        });

        //Build transcription
        response.data.results?.map((result) => {
          this.transcriptionResults.push(result.alternatives[0].transcript);
        });

        //Join transcription
        this.transcriptionDTO.transcription =
          this.transcriptionResults.join(' ');

        //Return final transcription
        return this.transcriptionDTO;
      }else{
        console.log(`File on filepath: ${filePath} does not exist`);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
