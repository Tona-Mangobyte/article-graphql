import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ArticleUpdateInput {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field()
  content: string;
}
