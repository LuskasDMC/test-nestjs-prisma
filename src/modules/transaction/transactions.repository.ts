import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma.service';
import { ITransaction } from './interfaces/transaction.interface';
import { ITransactionsRepository } from './interfaces/transaction.repository.interface';

@Injectable()
class TransactionsRepository implements ITransactionsRepository {
  constructor(private database: PrismaService) {}

  create(data: ITransaction): Promise<ITransaction> {
    return this.database.transaction.create({ data });
  }
}

export default TransactionsRepository;
