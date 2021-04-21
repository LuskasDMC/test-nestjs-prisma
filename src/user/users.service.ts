import { Injectable } from '@nestjs/common';
import IUser from './interfaces/user.interface';
import UserEntity from './user.entity';
import UserRepository from './users.repository';

@Injectable()
export class UsersService {
  constructor(private repository: UserRepository) {}

  async createUser(data: IUser): Promise<IUser> {
    const user = UserEntity.create(data);
    const newUser = await this.repository.create(user);
    return newUser;
  }
}
