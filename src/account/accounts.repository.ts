import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import IAccount from './interfaces/account.interface';
import IAccountRepository from './interfaces/account.repository.interface';

@Injectable()
class AccountRepository implements IAccountRepository {
  constructor(private database: PrismaService) {}

  create(data: IAccount): Promise<IAccount> {
    return this.database.account.create({ data });
  }
}

export default AccountRepository;
