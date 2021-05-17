import { Injectable } from '@nestjs/common';
import AccountsService from 'src/modules/account/accounts.service';
import { NotFoundException } from 'src/execeptions/not-found.exception';
import IUser from './interfaces/user.interface';
import UserEntity from './user.entity';
import UserRepository from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    private repository: UserRepository,
    private accountsService: AccountsService,
  ) {}

  async createUser(data: IUser): Promise<IUser> {
    const user = UserEntity.create(data);

    const newUser = await this.repository.create(user);
    await this.accountsService.createAccount({
      ownerId: newUser.id,
      balance: 0,
    });

    return newUser;
  }

  async getAllUsers(): Promise<IUser[]> {
    const user = await this.repository.getAllUsers();

    if (!user.length) {
      throw new NotFoundException({ error: 'No users found' });
    }

    return user;
  }

  async getUserById(id: number): Promise<IUser> {
    const user = await this.repository.getById(id);

    if (!user) {
      throw new NotFoundException({ error: 'User not found' });
    }

    return user;
  }
}
