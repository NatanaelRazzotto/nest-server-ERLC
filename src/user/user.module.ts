import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
    imports: [PrismaModule],
  providers: [UserService],  
  controllers: [UserController],
  exports: [UserService] // Exporta o UserService para ser usado em outros módulos
})
export class UserModule {}
