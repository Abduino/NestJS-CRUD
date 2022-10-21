import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';


@Controller('wallets')
export class WalletsController {
  constructor(private readonly walletsService: WalletsService) {}

  @Post('/account/create')
  create(@Body() createWalletDto: CreateWalletDto) {
    return this.walletsService.create(createWalletDto);
  }


  @Get('/account/getAll')
  findAll() {
    return this.walletsService.findAll();
  }
  @Patch('/account/update:id')
  update(@Param('id') id: number, @Body() updateWalletDto: UpdateWalletDto) {
    return this.walletsService.update(+id, updateWalletDto);
  }

  @Delete('/account/delete:id')
  remove(@Param('id') id: number) {
    return this.walletsService.remove(+id);
  }
  @Get('/account/findOne:id')
  findOne(@Param('id') id: number) {
    return this.walletsService.findOne(+id);
  }

}
