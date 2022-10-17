import { Module } from '@nestjs/common';
import { ServiceTypeService } from './service-type.service';
import { ServiceTypeController } from './service-type.controller';
import { PrismaModule } from 'src/nest/prismanp/prisma.module';

@Module({
  controllers: [ServiceTypeController],
  providers: [ServiceTypeService],
  imports: [PrismaModule],
})
export class ServiceTypeModule {}
