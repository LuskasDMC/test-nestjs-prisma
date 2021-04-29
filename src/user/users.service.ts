import { Injectable } from '@nestjs/common';
import AccountsService from 'src/account/accounts.service';
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
}
