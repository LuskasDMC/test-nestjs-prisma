import { Injectable } from '@nestjs/common';
import IUserRepository from './interfaces/user.repository.interface';

import { PrismaService } from '../../infra/database/prisma.service';
import IUser from './interfaces/user.interface';

@Injectable()
class UsersRepository implements IUserRepository {
  constructor(private database: PrismaService) {}

  create(data: IUser): Promise<IUser> {
    return this.database.user.create({ data });
  }

  getAllUsers(): Promise<IUser[]> {
    return this.database.user.findMany();
  }

  getById(id: number): Promise<IUser> {
    return this.database.user.findUnique({ where: { id } });
  }
}

export default UsersRepository;
