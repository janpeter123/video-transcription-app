import { IsString } from 'class-validator';

export class videoDTO {
  @IsString()
  readonly url: string;
}