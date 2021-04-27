import { HttpException, HttpStatus } from '@nestjs/common';
import CustomException from './interfaces/custom-exception.interface';

export class ForbiddenException extends HttpException {
  constructor(data?: CustomException) {
    super(
      data
        ? Object.assign({ status: HttpStatus.FORBIDDEN }, data)
        : 'Forbidden',
      HttpStatus.FORBIDDEN,
    );
  }
}
