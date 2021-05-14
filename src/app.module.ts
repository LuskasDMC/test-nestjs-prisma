import { Module } from '@nestjs/common';
import { UsersModule } from 'src/modules/user/users.module';
import { AccountsModule } from './modules/account/accounts.module';
import TransactionsModule from './modules/transaction/transactions.module';

@Module({
  imports: [UsersModule, AccountsModule, TransactionsModule],
})
export class AppModule {}
