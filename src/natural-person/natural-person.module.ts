import { Module } from '@nestjs/common';
import { NaturalPersonService } from './natural-person.service';
import { NaturalPersonController } from './natural-person.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [PrismaModule, UserModule],
  providers: [NaturalPersonService],
  controllers: [NaturalPersonController],
   exports: [NaturalPersonService] // Exporta o UserService para ser usado em outros módulos
})
export class NaturalPersonModule {}
