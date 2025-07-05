import { Get, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {

    constructor(private prisma: PrismaService) {}
   
    // person.service.ts

    async getModel(id: string) {
        return this.prisma.user.findUnique({
            where: { id },
        });
    }

    async getUserIdDiscord(id: string) {
        return this.prisma.user.findUnique({
            where: { idDiscord : id },
        });
    }

    async create(createUserDto: CreateUserDto) {
        try{
            const { nickname, nameServer, userType = "PLAYER", idDiscord} = createUserDto;

            // Criação no banco
            const user = await this.prisma.user.create({
            data: {
                nickname,
                nameServer,
                idDiscord, 
                userType,
            },
            });
            console.log("🚀 ~ UserService ~ create ~ user:", user)
             return user;
        }
        catch(error){
            console.log(error)
             return error;
        }

       
  }
}
