import { Prisma } from '.prisma/client';
import IAccount from './account.interface';

export default interface IAccountRepository {
  create(data: IAccount): Promise<IAccount>;
  updateById(data: Partial<IAccount>, id: number): Promise<IAccount>;
  updateByOwnerId(
    data: Partial<IAccount>,
    ownerId: number,
  ): Promise<Prisma.BatchPayload>;
}
