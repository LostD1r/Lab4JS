import { IsInt, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateCommentDto {
  @IsNumber()
  @IsInt()
  public postId: number;
  @MinLength(1)
  @IsString({ message: 'Required text field!' })
  public text: string;
}
