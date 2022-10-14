import { Injectable } from '@nestjs/common';
import { CreateTariffDto } from './dto/create-tariff.dto';
import { UpdateTariffDto } from './dto/update-tariff.dto';
import { PrismaService } from 'src/nest/prismanp/prisma.service';


@Injectable()
export class TariffService {
  constructor (private prisma: PrismaService){}
  create(createTariffDto: CreateTariffDto) {
    return 'This action adds a new tariff';
  }

  findAll() {
    return this.prisma.tariff.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} tariff`;
  }

  update(id: number, updateTariffDto: UpdateTariffDto) {
    return `This action updates a #${id} tariff`;
  }

  remove(id: number) {
    return `This action removes a #${id} tariff`;
  }
}
