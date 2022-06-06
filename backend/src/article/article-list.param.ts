import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@ArgsType()
export class ArticleListParam {
  @Field(type => Int)
  @Min(1)
  page = 1;

  @Field(type => Int)
  @Max(100)
  limit = 25;
}
