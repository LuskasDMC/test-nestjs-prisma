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

  updateById(data: Partial<IAccount>, id: number): Promise<IAccount> {
    return this.database.account.update({
      data,
      where: {
        id,
      },
    });
  }

  updateByOwnerId(
    data: Partial<IAccount>,
    ownerId: number,
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
