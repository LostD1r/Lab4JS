import { IsString, MinLength } from 'class-validator';

export class UpdateCommentDto {
  @MinLength(1)
  @IsString({ message: 'Required text field!' })
  public text: string;
}
