import { Injectable } from '@nestjs/common';
import AccountsService from 'src/modules/account/accounts.service';
import { ITransaction } from './interfaces/transaction.interface';
import TransactionEntity from './transaction.entity';
import TransactionsRepository from './transactions.repository';

@Injectable()
class TransactionsServices {
  constructor(
    private transactionsRepository: TransactionsRepository,
    private accountsService: AccountsService,
  ) {}

  async createTransaction(data: ITransaction) {
    const transaction = TransactionEntity.create(data);
    await this.transactionsRepository.create(transaction);
    await this.accountsService.updateAccountByOwnerId(data.accountId, {
      balance: data.value,
    });
  }
}

export default TransactionsServices;
