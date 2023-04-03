import { nluResults } from "./nluResults.interface";

export interface transcriptionDTO {
    transcription: string;
    categories : Array<nluResults>
  }