import { HttpException, HttpStatus } from '@nestjs/common';
import CustomException from './interfaces/custom-exception.interface';

export class BadRequestException extends HttpException {
  constructor(data?: CustomException) {
    super(
      data
        ? Object.assign({ status: HttpStatus.BAD_REQUEST }, data)
        : 'Forbidden',
      HttpStatus.BAD_REQUEST,
    );
  }
}
