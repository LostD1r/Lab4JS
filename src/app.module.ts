import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from './entities';
import { root } from './utils/paths';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      entities,
      logging: true,
      type: 'sqlite',
      synchronize: true,
      database: `${root}/db/db.db`,
    }),
    PostModule,
    CommentsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
