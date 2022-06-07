import { Field, InputType } from '@nestjs/graphql';
import {IsNotEmpty, IsOptional} from "class-validator";

@InputType()
export class ArticleNewInput {
  @IsNotEmpty()
  @Field()
  title: string;

  @IsOptional()
  @Field()
  content: string;
}
