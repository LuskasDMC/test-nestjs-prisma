import { Prisma } from '.prisma/client';
import IAccount from './account.interface';

export default interface IAccountRepository {
  create(data: IAccount): Promise<IAccount>;
  updateById(id: number, data: Partial<IAccount>): Promise<IAccount>;
  updateByOwnerId(
    ownerId: number,
    data: Partial<IAccount>,
  ): Promise<Prisma.BatchPayload>;
}
