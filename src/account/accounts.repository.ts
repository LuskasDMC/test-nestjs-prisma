import { Prisma } from '.prisma/client';
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

  updateById(id: number, data: Partial<IAccount>): Promise<IAccount> {
    return this.database.account.update({
      data,
      where: {
        id,
      },
    });
  }

  updateByOwnerId(
    ownerId: number,
    data: Partial<IAccount>,
  ): Promise<Prisma.BatchPayload> {
    return this.database.account.updateMany({
      data,
      where: {
        ownerId,
      },
    });
  }
}

export default AccountRepository;
