import { Body, Controller, Post } from '@nestjs/common';
import { CreateTransactionDTO } from './dto/create-transaction';
import TransactionsServices from './transactions.service';

@Controller('transaction')
class TransactionsController {
  constructor(private transactionsService: TransactionsServices) {}

  @Post()
  async createTransaction(@Body() data: CreateTransactionDTO) {
    await this.transactionsService.createTransaction(data);
  }
}

export default TransactionsController;
