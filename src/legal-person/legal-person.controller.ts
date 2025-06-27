import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LegalPersonService } from './legal-person.service';
import { CreateNaturalPersonDto } from 'src/natural-person/dto/create-natural-person.dto';
import { CreateLegalPersonDto } from './dto/create-legal-person.dto';

@Controller('pessoa-juridica')
export class LegalPersonController {

      constructor(private readonly naturalPersonService: LegalPersonService) {}
        
        // Rota para buscar um usuário por id
        @Get(':id')
        async findById(@Param('id') id: string) {
            return this.naturalPersonService.getModel(id);
        }
    
            // Rota para buscar um usuário por id
        @Get('/cpf/:id')
        async findBySerialNumber(@Param('id') id: string) {
            return this.naturalPersonService.getPersonCpf(id);
        }
    
        @Post()
        async create(@Body() createUserDto: CreateLegalPersonDto) {
            return this.naturalPersonService.createLegalPerson(createUserDto);
        }
}
