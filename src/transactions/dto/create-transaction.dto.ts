
import { ApiProperty } from "@nestjs/swagger";
import {  IsNumber, IsNotEmpty, IsString } from "class-validator";

export class CreateTransactionDto {

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    transMedium: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    transType: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    transAmount: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    walletID: number;
}

