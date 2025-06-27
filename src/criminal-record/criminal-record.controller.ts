import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CriminalRecordService } from './criminal-record.service';
import { CreateCriminalRecordDto } from './dto/create-criminal-record.dto';

@Controller('criminal-record')
export class CriminalRecordController {

    constructor(private readonly naturalPersonService: CriminalRecordService) {}
            
    // Rota para buscar um usuário por id
    @Get(':id')
    async findById(@Param('id') id: string) {
        return this.naturalPersonService.getModel(id);
    }


    @Post()
    async create(@Body() createUserDto: CreateCriminalRecordDto) {
        return this.naturalPersonService.createLegalRegisterforPerson(createUserDto);
    }
}
