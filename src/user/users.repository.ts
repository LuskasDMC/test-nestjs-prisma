import { Injectable } from '@nestjs/common';
import IUserRepository from './interfaces/user.repository.interface';

import { PrismaService } from '../database/prisma.service';
import IUser from './interfaces/user.interface';

@Injectable()
class UsersRepository implements IUserRepository {
  constructor(private database: PrismaService) {}

  create(data: IUser): Promise<IUser> {
    return this.database.user.create({ data });
  }
}

export default UsersRepository;
