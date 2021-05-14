import { Module } from '@nestjs/common';
import { AccountsModule } from 'src/modules/account/accounts.module';
import { PrismaService } from 'src/infra/database/prisma.service';
import TransactionsController from './transactions.controller';
import TransactionsRepository from './transactions.repository';
import TransactionsServices from './transactions.service';

@Module({
  imports: [AccountsModule],
  controllers: [TransactionsController],
  providers: [TransactionsServices, TransactionsRepository, PrismaService],
})
class TransactionsModule {}

export default TransactionsModule;
