import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { UserService } from '../user/user.service';
import { CreateCriminalRecordDto } from './dto/create-criminal-record.dto';
import { NaturalPersonService } from '../natural-person/natural-person.service';

@Injectable()
export class CriminalRecordService {

    constructor( private prisma: PrismaService, private userService: UserService , private naturalPersonService:  NaturalPersonService){}
        
            async getModel(id: string) {
                return this.prisma.legalPerson.findUnique({
                    where: { id },
                });
            }
    
            async createLegalRegisterforPerson(createLegalPersonDto : CreateCriminalRecordDto) {            
    
            const userAuthor = await this.naturalPersonService.getPersonNPF(createLegalPersonDto.authorRecordIDDiscord);
    
            if (!userAuthor) {
                throw new Error('Usuário Autor não encontrado');
            }

            const userOffender = await this.naturalPersonService.getPersonNPF(createLegalPersonDto.offenderIDDiscord);
    
            if (!userOffender) {
                throw new Error('Usuário Criminal não encontrado');
            }
    
    
            const criminalRecord = await this.prisma.criminalRecord.create({
                data: {
                   descriptionSituation : createLegalPersonDto.descriptionSituation,
                   urlImage: createLegalPersonDto.urlImage,
                   timeOfConfinement: createLegalPersonDto.timeOfConfinement,
                   coast: createLegalPersonDto.coast,
                   paymentPending: createLegalPersonDto.paymentPending,
                   authorRecordID : userAuthor.id,
                   offenderID: userOffender.id
                },    
                include : {
                    authorRecord : true,
                    offender: true
                }          
            });
    
            console.log("🚀 ~ CriminalRecordService ~ createLegalRegisterforPerson ~ criminalRecord:", criminalRecord)
            return criminalRecord;
            }

            
}
