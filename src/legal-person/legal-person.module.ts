import { Module } from '@nestjs/common';
import { LegalPersonController } from './legal-person.controller';
import { LegalPersonService } from './legal-person.service';
import { PrismaModule } from 'prisma/prisma.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [PrismaModule, UserModule],
  controllers: [LegalPersonController],
  providers: [LegalPersonService]
})
export class LegalPersonModule {}
