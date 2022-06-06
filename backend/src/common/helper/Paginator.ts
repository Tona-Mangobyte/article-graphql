import {Field, Int, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class Paging {
    @Field()
    page: number;
    @Field()
    next: string;
    @Field()
    previous: string;
    @Field()
    limit: number;
    @Field()
    pageCount: number;
    @Field()
    total: number;
}
export class Paginator {
    page: number;
    total: number;
    limit: number;

    constructor(page: number, total: number, limit: number) {
        this.page = page === undefined ? 0 : page;
        this.total = total;
        this.limit = limit === undefined ? 10 : limit;
    }

    public generate(): Paging {
        const isNext = this.total / this.limit >= this.page;
        const isPrevious = this.page > 1;
        const routes = {
            nextPage: isNext ? `${this.page + 1}` : '',
            previousPage: isPrevious ? `${this.page}` : '',
        };
        const { previousPage, nextPage } = routes;
        return {
            page: this.page,
            next: nextPage,
            previous: previousPage,
            limit: parseInt(this.limit.toString(), 10),
            pageCount: Math.ceil(this.total / this.limit),
            total: this.total,
        };
    }
}
