import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ example: 'user@mail.com', description: 'User email' })
    readonly email: string;
     @ApiProperty({ example: 'strongPassword123', description: 'User password' })
    readonly password: string;
}