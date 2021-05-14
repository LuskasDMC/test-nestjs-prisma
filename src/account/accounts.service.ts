import { Injectable } from '@nestjs/common';
import AccountRepository from './accounts.repository';
import IAccount from './interfaces/account.interface';

@Injectable()
class AccountsService {
  constructor(private accountRepository: AccountRepository) {}

  createAccount(data: IAccount): Promise<IAccount> {
    return this.accountRepository.create(data);
  }

  updateAccountById(id: number, data: IAccount) {
    return this.accountRepository.updateById(id, data);
  }

  updateAccountByOwnerId(id: number, data: Partial<IAccount>) {
    return this.accountRepository.updateByOwnerId(id, data);
  }
}

export default AccountsService;
