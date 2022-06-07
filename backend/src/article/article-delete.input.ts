import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ArticleDeleteInput {
  @Field()
  id: number;
}
