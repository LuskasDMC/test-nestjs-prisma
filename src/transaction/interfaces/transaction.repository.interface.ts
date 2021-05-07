import { ITransaction } from './transaction.interface';

export interface ITransactionsRepository {
  create(data: ITransaction): Promise<ITransaction>;
}
