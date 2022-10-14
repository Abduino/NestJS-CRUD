import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './nest/prismanp/prisma.module';
import { ArticlesModule } from './articles/articles.module';
import { TariffModule } from './tariff/tariff.module';


@Module({
  imports: [PrismaModule, ArticlesModule, TariffModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
