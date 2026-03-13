import { ApiProperty } from "@nestjs/swagger";


export class CreateRoleDto {

    @ApiProperty({ example: 'ADMIN', description: 'User role' })
    readonly value: string;
    
    @ApiProperty({ example: 'Administrator with full access', description: 'Description role' })
    readonly description: string;
}