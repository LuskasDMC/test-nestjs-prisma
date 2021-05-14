import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import AccountsController from './accounts.controller';
import AccountsRepository from './accounts.repository';
import AccountsService from './accounts.service';

@Module({
  controllers: [AccountsController],
  providers: [AccountsRepository, AccountsService],
  exports: [AccountsService],
})
export class AccountsModule {}
