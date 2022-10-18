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
  @Get('/onlyServices:id')
  findOne(@Param('id') id: number) {
    return this.serviceTypeService.findOne(+id);
  }
/*   @Get ('withPrice')
  findAllRelated(){
    return this.serviceTypeService.findWithPrice();
  } */
/*   @Get('serviceType')
  findServices(){
    return this.serviceTypeService.findServiceType();
  } */
/*   @Get('/typeName:typeName')
  findAllServices(@Param('typeName') typeName:string) {    
    return this.serviceTypeService.findAllServicesType(typeName);
  } */
  @Get('/serviceType:serviceType')
  findServices(){
    return this.serviceTypeService.findServicesTypes();
  }
/*   @Get('/typeName:typeName')
  findServices(@Param('typeName') typeName:string) {    
    return this.serviceTypeService.findServiceType(typeName);
  } */

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiceTypeDto: UpdateServiceTypeDto) {
    return this.serviceTypeService.update(+id, updateServiceTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceTypeService.remove(+id);
  }

  @Get('/withPrice')
  findAllRelated() {
    return this.serviceTypeService.findWithPrice();
  }
  @Get('/withPrice:id')
  findOneWithPrice(@Param('id') id: number) {
    return this.serviceTypeService.findOneWithPrice(+id);
  }

  @Get('/totalServices')
  findTotalServices(){
    return this.serviceTypeService.findTotalNumberServices();
  }








}
