import { Injectable } from '@nestjs/common';
import { CreateServiceTypeDto } from './dto/create-service-type.dto';
import { UpdateServiceTypeDto } from './dto/update-service-type.dto';
import { PrismaService } from 'src/nest/prismanp/prisma.service';

@Injectable()
export class ServiceTypeService {
  constructor (private prisma: PrismaService){}

  create(createServiceTypeDto: CreateServiceTypeDto) {
    return this.prisma.serviceType.create({data: createServiceTypeDto});
  }
  findAll() {
    return this.prisma.serviceType.findMany();
  }

  findOne(id: number) {
    return this.prisma.serviceType.findUnique({where:{id}});
  }

  findServicesType(typeName: string) {
    return this.prisma.serviceType.findMany({ where: { typeName} });
  }

  update(id: number, updateServiceTypeDto: UpdateServiceTypeDto) {
    return this.prisma.serviceType.update({where : {id}, data: updateServiceTypeDto,});
  }

  remove(id: number) {
    return this.prisma.serviceType.delete({where: {id}});
  }
}
