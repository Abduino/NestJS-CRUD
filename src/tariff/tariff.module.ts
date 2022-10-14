import { Module } from '@nestjs/common';
import { TariffService } from './tariff.service';
import { TariffController } from './tariff.controller';
import { PrismaModule } from 'src/nest/prismanp/prisma.module';
@Module({
  controllers: [TariffController],
  providers: [TariffService],
  imports: [PrismaModule],
})
export class TariffModule {}
