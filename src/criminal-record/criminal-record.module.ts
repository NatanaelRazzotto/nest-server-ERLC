import { Module } from '@nestjs/common';
import { CriminalRecordController } from './criminal-record.controller';
import { CriminalRecordService } from './criminal-record.service';
import { PrismaModule } from 'prisma/prisma.module';
import { UserModule } from '../user/user.module';
import { NaturalPersonModule } from '../natural-person/natural-person.module';

@Module({
    imports: [PrismaModule, UserModule, NaturalPersonModule],
  controllers: [CriminalRecordController],
  providers: [CriminalRecordService]
})
export class CriminalRecordModule {}
