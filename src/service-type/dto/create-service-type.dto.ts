
import { ApiProperty } from "@nestjs/swagger";
import { Length, IsInt, IsEmpty,  IsNumber, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { IsNotEmptyString } from 'src/utils/decorators';

export class CreateServiceTypeDto {
        
    @IsNotEmptyString()
    @ApiProperty()
    serviceTypePhoto: string;
  
  
     @Length(2, 50, {
        message: 'Incorrect length!',
      })
    @IsNotEmptyString()
    @ApiProperty()
    typeName: string;


    @IsNotEmpty()
    @IsInt()
    @ApiProperty()
    capacity: number;

    @IsNotEmptyString()
    @ApiProperty()
    model: string;


    @IsNumber()
    @IsNotEmpty()   
    @ApiProperty()
    year: number;

}
