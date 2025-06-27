import { Module } from '@nestjs/common';
import { NaturalPersonService } from './natural-person.service';
import { NaturalPersonController } from './natural-person.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [PrismaModule, UserModule],
  providers: [NaturalPersonService],
  controllers: [NaturalPersonController]
})
export class NaturalPersonModule {}
