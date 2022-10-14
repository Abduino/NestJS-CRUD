import { ApiProperty } from "@nestjs/swagger";
import internal from "stream";
export class CreateTariffDto {
    @ApiProperty()
    initial: number;

    @ApiProperty()
    price: number; 

    @ApiProperty()
    commission: number; 

    @ApiProperty()
    type: string;
}
