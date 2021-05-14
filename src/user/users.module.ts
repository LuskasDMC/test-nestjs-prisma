import { Module } from '@nestjs/common';
import AccountsService from 'src/account/accounts.service';
import { PrismaService } from 'src/database/prisma.service';
import { UsersController } from './users.controller';
import UserRepository from './users.repository';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UserRepository, PrismaService],
  imports: [AccountsService],
  exports: [UsersService, UserRepository],
})
export class UsersModule {}
