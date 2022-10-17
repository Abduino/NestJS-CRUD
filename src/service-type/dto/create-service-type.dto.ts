
import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty,  IsNumber, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateServiceTypeDto {
        
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    typeName: string;


    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    capacity: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    model: string;

    @IsNotEmpty()
    @IsNumber()   
    @ApiProperty()
    year: number;

}
