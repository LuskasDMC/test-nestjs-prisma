import { Module } from '@nestjs/common';
import { UsersModule } from 'src/user/users.module';
import { AccountModule } from './account/accounts.module';

@Module({
  imports: [UsersModule, AccountModule],
})
export class AppModule {}
