import { Injectable } from '@nestjs/common';

@Injectable()
class TransactionsServices {
  constructor(private transactionsRepository) {}
}

export default TransactionsServices;
