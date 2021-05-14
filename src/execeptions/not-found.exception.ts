import { HttpException, HttpStatus } from '@nestjs/common';
import CustomException from './interfaces/custom-exception.interface';

export class NotFoundException extends HttpException {
  constructor(data?: CustomException) {
    super(
      data
        ? Object.assign({ status: HttpStatus.NOT_FOUND }, data)
        : 'Not-found',
      HttpStatus.NOT_FOUND,
    );
  }
}
