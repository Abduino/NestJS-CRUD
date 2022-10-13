import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { PrismaModule } from 'src/nest/prismanp/prisma.module';
@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService],
  imports: [PrismaModule]
})
export class ArticlesModule {}
