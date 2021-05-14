import { Module } from '@nestjs/common';
import { UsersModule } from 'src/user/users.module';
import { AccountsModule } from './account/accounts.module';
import TransactionsModule from './transaction/transactions.module';

@Module({
  imports: [UsersModule, AccountsModule, TransactionsModule],
})
export class AppModule {}
