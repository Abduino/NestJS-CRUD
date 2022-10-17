
import { ApiProperty } from "@nestjs/swagger";

export class CreateServiceTypeDto {
        
    @ApiProperty()
    typeName: string;

    @ApiProperty()
    capacity: number;

    @ApiProperty()
    model: string;

    @ApiProperty()
    year: number;

}
