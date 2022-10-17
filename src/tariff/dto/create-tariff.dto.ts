import { ApiProperty } from "@nestjs/swagger";
import internal from "stream";
import {  IsNumber, IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

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

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    type: string;
}
