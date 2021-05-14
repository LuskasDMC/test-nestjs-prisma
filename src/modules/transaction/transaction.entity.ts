import { BadRequestException } from 'src/execeptions/bad-request.exception';
import { ITransaction } from './interfaces/transaction.interface';

class TransactionEntity {
  static create({ value, accountId }: ITransaction) {
    if (!value) {
      throw new BadRequestException({ error: 'Property value is required!' });
    }

    if (!accountId) {
      throw new BadRequestException({ error: 'Account ID is required!' });
    }

    return {
      value,
      accountId,
    };
  }
}

export default TransactionEntity;
