import { Injectable } from '@nestjs/common';
import AccountRepository from './accounts.repository';
import IAccount from './interfaces/account.interface';

@Injectable()
class AccountsService {
  constructor(private accountRepository: AccountRepository) {}

  createAccount(data: IAccount): Promise<IAccount> {
    return this.accountRepository.create(data);
  }

  updateAccountById(data: IAccount, id: number) {
    return this.accountRepository.updateById(data, id);
  }
}

export default AccountsService;
