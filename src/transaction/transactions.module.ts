import { Module } from '@nestjs/common';
import AccountsService from 'src/account/accounts.service';
import { PrismaService } from 'src/database/prisma.service';
import TransactionsController from './transactions.controller';
import TransactionsRepository from './transactions.repository';
import TransactionsServices from './transactions.service';

@Module({
  imports: [AccountsService],
  controllers: [TransactionsController],
  providers: [TransactionsServices, TransactionsRepository, PrismaService],
})
class TransactionsModule {}

export default TransactionsModule;
