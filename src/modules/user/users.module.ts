import { Module } from '@nestjs/common';
import { AccountsModule } from 'src/modules/account/accounts.module';
import { PrismaService } from 'src/infra/database/prisma.service';
import { UsersController } from './users.controller';
import UserRepository from './users.repository';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UserRepository, PrismaService],
  imports: [AccountsModule],
  exports: [UsersService],
})
export class UsersModule {}
