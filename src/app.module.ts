import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PrismaModule } from '../prisma/prisma.module';
import { UserModule } from './user/user.module';
import { PersonModule } from './person/person.module';
import { NaturalPersonModule } from './natural-person/natural-person.module';
import { LegalPersonModule } from './legal-person/legal-person.module';
import { CriminalRecordModule } from './criminal-record/criminal-record.module';

@Module({
  imports: [PrismaModule, UserModule, PersonModule, NaturalPersonModule, LegalPersonModule, CriminalRecordModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
