import { Module } from '@nestjs/common';
import AccountsService from './accounts.service';

@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports: [AccountsService],
})
export class AccountModule {}
