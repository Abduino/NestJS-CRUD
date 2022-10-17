import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './nest/prismanp/prisma.module';
import { ArticlesModule } from './articles/articles.module';
import { TariffModule } from './tariff/tariff.module';
import { ServiceTypeModule } from './service-type/service-type.module';


@Module({
  imports: [PrismaModule, ArticlesModule, TariffModule, ServiceTypeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
