import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

import { UserService } from 'src/user/user.service';
import { CreateNaturalPersonDto } from './dto/create-natural-person.dto';
import { gerarCodigo5DigitosComDV } from 'src/utils/ultilFunctions';

@Injectable()
export class NaturalPersonService {


    constructor( private prisma: PrismaService, private userService: UserService ){}

    async getModel(id: string) {
        return this.prisma.naturalPerson.findUnique({
            where: { id },
        });
    }

    async getPersonNPF(NPF: string) {
        return this.prisma.naturalPerson.findUnique({
            where: { NPF : NPF},
        });
    }

    async createNaturalPersonNatural(CreateNaturalPersonDto : CreateNaturalPersonDto) {
        const {primaryName,lastName, birth, userIdDiscord, urlImage } = CreateNaturalPersonDto

        const user = await this.userService.getUserIdDiscord(userIdDiscord);

        if (!user) {
            throw new Error('Usuário não encontrado');
        }


        const naturalPerson = await this.prisma.naturalPerson.create({
            data: {
                primaryName: primaryName,
                lastName: lastName,
                NPF: gerarCodigo5DigitosComDV(),
                birth: new Date(birth),    
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

        console.log("🚀 ~ NaturalPersonService ~ createNaturalPersonNatural ~ naturalPerson:", naturalPerson)
        return naturalPerson;
        }
    
}
