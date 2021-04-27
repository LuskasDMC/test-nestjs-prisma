import { Injectable } from '@nestjs/common';

@Injectable()
class AccountsService {
  constructor(private accountRepository) {}

  createAccount() {}
}
