import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { UserService } from '../user/user.service';
import { CreateLegalPersonDto } from './dto/create-legal-person.dto';
import { gerarCodigoINPJ } from 'src/utils/ultilFunctions';

@Injectable()
export class LegalPersonService {

    constructor( private prisma: PrismaService, private userService: UserService ){}
    
        async getModel(id: string) {
            return this.prisma.legalPerson.findUnique({
                where: { id },
            });
        }
    
        async getPersonCpf(cpf: string) {
            return this.prisma.legalPerson.findUnique({
                where: { INPJ : cpf},
            });
        }
    
        async createLegalPerson(createLegalPersonDto : CreateLegalPersonDto) {
        const {companyName, publicCompany, userIdDiscord, urlImage } = createLegalPersonDto

        const user = await this.userService.getUserIdDiscord(userIdDiscord);

        if (!user) {
            throw new Error('Usuário não encontrado');
        }


        const naturalPerson = await this.prisma.legalPerson.create({
            data: {
                companyName: companyName,
                publicCompany: publicCompany,
                INPJ: gerarCodigoINPJ(),                
                person: {
                    create: {
                        urlImage: urlImage,
                        userID: user.id
                    }
                }
            },
            include: {
              person: {
                include : {
                    user : true
                }
            }
            }
        });

        return naturalPerson;
        }
}
