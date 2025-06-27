import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

import { UserService } from 'src/user/user.service';
import { CreateNaturalPersonDto } from './dto/create-natural-person.dto';

@Injectable()
export class NaturalPersonService {


    constructor( private prisma: PrismaService, private userService: UserService ){}

    async getModel(id: string) {
        return this.prisma.naturalPerson.findUnique({
            where: { id },
        });
    }

    async getPersonCpf(cpf: string) {
        return this.prisma.naturalPerson.findUnique({
            where: { NPF : cpf},
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
                NPF: "121",//data.NPF,
                birth: new Date(birth),    
                person: {
                    create: {
                        urlImage: urlImage,
                        userID: user.id
                    }
                }
            },
            include: {
            person: true // se quiser retornar os dados da pessoa também
            }
        });

        return naturalPerson;
        }
    
}
