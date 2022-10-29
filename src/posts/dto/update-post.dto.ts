import { IsString, MinLength } from 'class-validator';

export class UpdatePostDto {
  @MinLength(1)
  @IsString({ message: 'Required title field!' })
  public title: string;
  @IsString()
  public description: string;
}
