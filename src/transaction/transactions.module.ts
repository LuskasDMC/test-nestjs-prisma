import { Module } from '@nestjs/common';
import AccountsService from 'src/account/accounts.service';
import TransactionsController from './transactions.controller';
import TransactionsRepository from './transactions.repository';
import TransactionsServices from './transactions.service';

@Module({
  exports: [TransactionsController],
  imports: [AccountsService],
  providers: [TransactionsServices, TransactionsRepository],
})
class TransactionsModule {}

export default TransactionsModule;
