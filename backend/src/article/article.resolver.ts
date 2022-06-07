import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ArticleService } from './article.service';
import { ArticleListArgs } from './article-list.args';
import { ArticleEntity } from './article.entity';
import { ArticleNewInput } from './article-new.input';
import { ArticleUpdateInput } from './article-update.input';
import { ArticleDeleteInput } from './article-delete.input';
import {ArticlePagination} from "./article.pagination";

@Resolver(of => ArticleEntity)
export class ArticleResolver {
  constructor(private readonly articleService: ArticleService) {}

  @Query(returns => ArticlePagination)
  async getAllArticles(@Args() articleListParam: ArticleListArgs): Promise<ArticlePagination> {
    return await this.articleService.getAllArticles(articleListParam);
  }

  @Query(returns => ArticleEntity)
  async article(@Args('id') id: number): Promise<ArticleEntity> {
    return await this.articleService.getArticleById(id);
  }

  @Mutation(returns => ArticleEntity)
  async createArticle(@Args('article') articleNewDto: ArticleNewInput): Promise<ArticleEntity> {
    return await this.articleService.create(articleNewDto);
  }

  @Mutation(returns => ArticleEntity)
  async updateArticle(@Args('article') articleUpdateDto: ArticleUpdateInput): Promise<ArticleEntity> {
    return await this.articleService.update(articleUpdateDto);
  }

  @Mutation(returns => ArticleEntity)
  async deleteArticle(@Args('article') articleDeleteDto: ArticleDeleteInput): Promise<ArticleEntity> {
    return await this.articleService.remove(articleDeleteDto);
  }
}
