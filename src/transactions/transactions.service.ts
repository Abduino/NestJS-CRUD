import { Injectable, NotFoundException} from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { PrismaService } from 'src/nest/prismanp/prisma.service';

@Injectable()
export class TransactionsService {
  constructor (private prisma: PrismaService){}


  async create(createTransactionDto: CreateTransactionDto) {
   await this.prisma.transaction.create({data: createTransactionDto,  }) ;

    // if(!createTransaction){
    //   throw new NotFoundException('Product not found');
     
    // }
    // return this.prisma.wallet.update({data: { balance:{decrement: createTransactionDto.transAmount,},},where: {id: createTransactionDto.walletID},})

  }
  // if(createTransaction.transType == "credit"){
  //   return this.prisma.wallet.update({data: { balance:{decrement: createTransactionDto.transAmount,},},where: {id: createTransactionDto.walletID},})

  // }
  // else if (createTransaction.transType == "debit"){
  //   return this.prisma.wallet.update({data: { balance:{increment: createTransactionDto.transAmount,},},where: {id: createTransactionDto.walletID},})
  // }
  // else{
  //   return "something wrong";
  // }

  findAll() {
    return this.prisma.transaction.findMany();
  }

  findOne(id: number) {
    return this.prisma.transaction.findUnique({where: {id}});
  }

  async update(id: number, updateTransactionDto: UpdateTransactionDto) {
    // const deduction = this.prisma.wallet.update({data: { balance:{decrement: updateTransactionDto.transAmount,},},where: {id},})
    return this.prisma.transaction.update({ where:{id}, data: updateTransactionDto,});
  }

  remove(id: number) {
    return this.prisma.transaction.delete({where: {id}});
  }
}
