import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from 'nestjs-config';
import { resolve } from "path";
import { ArticleModule } from './article/article.module';
import {GraphqlExceptionFilter} from "./filters/graphql-exception.filter";

@Module({
  imports: [
    ConfigModule.load(resolve(__dirname, '../config', '**/!(*.d).{ts,js}')),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('database'),
      inject: [ConfigService],
    }),
    ArticleModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: true,
      playground: true,
      debug: true,
      include: [ArticleModule],
    }),
  ],
  providers: [
    {
      provide: 'APP_FILTER',
      useClass: GraphqlExceptionFilter,
    }
  ],
})
export class AppModule {}
