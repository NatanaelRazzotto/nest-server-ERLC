import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NaturalPersonService } from './natural-person.service';
import { CreateNaturalPersonDto } from './dto/create-natural-person.dto';


@Controller('pessoa-fisica')
export class NaturalPersonController {

    constructor(private readonly naturalPersonService: NaturalPersonService) {}
    
    // Rota para buscar um usuário por id
    @Get(':id')
    async findById(@Param('id') id: string) {
        return this.naturalPersonService.getModel(id);
    }

        // Rota para buscar um usuário por id
    @Get('/cpf/:id')
    async findBySerialNumber(@Param('id') id: string) {
        return this.naturalPersonService.getPersonNPF(id);
    }

    @Post()
    async create(@Body() createUserDto: CreateNaturalPersonDto) {
        return this.naturalPersonService.createNaturalPersonNatural(createUserDto);
    }
    
}
