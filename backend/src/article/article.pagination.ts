import {generatePagination} from "../common/helper/PaginationList";
import {ArticleEntity} from "./article.entity";
import {Paging} from "../common/helper/Paginator";
import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class ArticlePagination extends generatePagination(ArticleEntity) {
    @Field(returns => Paging)
    pagination: Paging;
    @Field(returns => [ArticleEntity])
    items: ArticleEntity[];
    constructor(pagination: Paging, items: ArticleEntity[]) {
        super();
        this.pagination = pagination;
        this.items = items;
    }
}
