import { Injectable } from '@nestjs/common';
import AccountsRepository from './accounts.repository';
import IAccount from './interfaces/account.interface';

@Injectable()
class AccountsService {
  constructor(private repository: AccountsRepository) {}

  createAccount(data: IAccount): Promise<IAccount> {
    return this.repository.create(data);
  }

  updateAccountById(id: number, data: IAccount) {
    return this.repository.updateById(id, data);
  }

  updateAccountByOwnerId(id: number, data: Partial<IAccount>) {
    return this.repository.updateByOwnerId(id, data);
  }
}

export default AccountsService;
