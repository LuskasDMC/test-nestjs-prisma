import { BadRequestException } from 'src/execeptions/bad-request.exception';
import IUser from './interfaces/user.interface';

class UserEntity {
  static create({ email, name }: IUser): IUser {
    if (!email) {
      throw new BadRequestException({ error: 'E-mail is required' });
    }

    if (!name) {
      throw new BadRequestException({ error: 'Name is required' });
    }

    return { email, name };
  }
}

export default UserEntity;
