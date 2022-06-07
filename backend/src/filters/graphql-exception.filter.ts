import {ArgumentsHost, Catch, HttpException} from "@nestjs/common";
import {GqlArgumentsHost, GqlExceptionFilter} from "@nestjs/graphql";

@Catch(HttpException)
export class GraphqlExceptionFilter implements GqlExceptionFilter {

    catch(exception: HttpException, host: ArgumentsHost) {
        const gqlHost = GqlArgumentsHost.create(host);
        console.error(gqlHost.getType());
        console.error(exception.getResponse());
        return exception;
    }
}
