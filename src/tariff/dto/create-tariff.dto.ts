import { ApiProperty } from "@nestjs/swagger";
import {  IsNumber, IsNotEmpty, IsString } from "class-validator";

export class CreateTariffDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    initial: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    price: number; 

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    commission: number; 

    @IsNotEmpty()
    @ApiProperty()
    serviceTypeId: number;
}
