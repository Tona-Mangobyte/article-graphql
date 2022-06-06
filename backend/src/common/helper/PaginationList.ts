import { Paging } from './Paginator';
import {Field, ObjectType} from "@nestjs/graphql";
import {Type} from "@nestjs/common";

export interface PaginationList<ENTITY> {
    pagination: Paging;
    items: ENTITY[];
}
export function generatePagination<T>(classRef: Type<T>): Type<PaginationList<T>> {
    @ObjectType({ isAbstract: true })
    abstract class Pagination implements PaginationList<T> {
        @Field(returns => Paging)
        pagination: Paging;
        @Field((type) => [classRef], { nullable: true })
        items: T[];
    }
    return Pagination as Type<PaginationList<T>>;
}
