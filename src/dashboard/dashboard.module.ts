import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { PrismaModule } from 'src/nest/prismanp/prisma.module';
@Module({
  controllers: [DashboardController],
  providers: [DashboardService],
  imports: [PrismaModule]
})
export class DashboardModule {}
