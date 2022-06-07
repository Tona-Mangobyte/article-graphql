import { ArticleRepository } from './article.repository';
import { ArticleNewInput } from './article-new.input';
import { ArticleEntity } from './article.entity';
import { ArticleListArgs } from './article-list.args';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleUpdateInput } from './article-update.input';
import { ArticleDeleteInput } from './article-delete.input';
import {Paginator} from "../common/helper/Paginator";
import {ArticlePagination} from "./article.pagination";

export class ArticleService {
  constructor(
    @InjectRepository(ArticleRepository)
    private readonly articleRepository: ArticleRepository) {
  }

  async getAllArticles(param: ArticleListArgs): Promise<ArticlePagination> {
    const { page, limit } = param;
    const [records, total] = await this.articleRepository.findAndCount({ skip: ((page - 1) * limit), take: limit });
    const pagination = new Paginator(page, total, limit).generate();
    return new ArticlePagination(pagination, records);
  }

  async getArticleById(id: number): Promise<ArticleEntity> {
    return await this.articleRepository.findOneOrFail(id);
  }

  async create(dto: ArticleNewInput): Promise<ArticleEntity> {
    const article = this.articleRepository.create();
    article.title = dto.title;
    article.content = dto.content;
    return await this.articleRepository.save(article);
  }

  async update(dto: ArticleUpdateInput): Promise<ArticleEntity> {
    const article = this.articleRepository.create();
    article.id = dto.id;
    article.title = dto.title;
    article.content = dto.content;
    return await this.articleRepository.save(article);
  }

  async remove(dto: ArticleDeleteInput): Promise<ArticleEntity> {
    const article = await this.articleRepository.findOneOrFail(dto.id);
    await this.articleRepository.delete(dto.id);
    return article;
  }
}
