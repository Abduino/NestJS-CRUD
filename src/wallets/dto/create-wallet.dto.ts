import { ApiProperty } from "@nestjs/swagger";
import {  IsNumber, IsNotEmpty, IsString } from "class-validator";

export class CreateWalletDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    driverId: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    balance: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    accStatus: string
}
