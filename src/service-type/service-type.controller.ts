import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ServiceTypeService } from './service-type.service';
import { CreateServiceTypeDto } from './dto/create-service-type.dto';
import { UpdateServiceTypeDto } from './dto/update-service-type.dto';

@Controller('service-type')
export class ServiceTypeController {
  constructor(private readonly serviceTypeService: ServiceTypeService) {}

  @Post()
  create(@Body() createServiceTypeDto: CreateServiceTypeDto) {
    return this.serviceTypeService.create(createServiceTypeDto);
  }

  @Get()
  findAll() {
    return this.serviceTypeService.findAll();
  }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe ) id: number) {
    return this.serviceTypeService.findOne(+id);
  }
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateServiceTypeDto: UpdateServiceTypeDto) {
    return this.serviceTypeService.update(+id, updateServiceTypeDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.serviceTypeService.remove(+id);
  }



  @Get('/withPrice')
  findAllRelated() {
    return this.serviceTypeService.findWithPrice();
  }

  @Get('/serviceType:serviceType')
  findServices() {    
    return this.serviceTypeService.findServiceType();
  }
  @Get('/withPrice:id')
  findOneWPrice(@Param('id') id: number) {
    return this.serviceTypeService.findOneWithPrice(+id);
  }


}