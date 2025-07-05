import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {

     constructor(private readonly userService: UserService) {}

    // Rota para buscar um usuário por id
    @Get(':id')
    async findById(@Param('id') id: string) {
        return this.userService.getModel(id);
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        console.log(createUserDto)
        return this.userService.create(createUserDto);
    }
}
