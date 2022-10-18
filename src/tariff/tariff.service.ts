import { Injectable } from '@nestjs/common';
import { CreateTariffDto } from './dto/create-tariff.dto';
import { UpdateTariffDto } from './dto/update-tariff.dto';
import { PrismaService } from 'src/nest/prismanp/prisma.service';

@Injectable()
export class TariffService {
  constructor (private prisma: PrismaService){}

  create(createTariffDto: CreateTariffDto) {
    return this.prisma.tariff.create({ data: createTariffDto});
 
  }


  findAll() {
    return this.prisma.tariff.findMany();
  }



  findOne(id: number) {
    return this.prisma.tariff.findUnique({where: {id}});
  }

  update(id: number, updateTariffDto: UpdateTariffDto) {
    return this.prisma.tariff.update({where: {id}, data: updateTariffDto,}) 
  }

  remove(id: number) {
    return this.prisma.tariff.delete({where: {id}});
  }
}
