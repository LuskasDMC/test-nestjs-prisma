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

    if (
      !/^[A-Za-z0-9](([_.-]?[a-zA-Z0-9]+)*)@([a-zA-Z0-9]+)(([.-]?[a-zA-Z0-9]+)*)\.([A-Za-z]){2,}$/.test(
        email,
      )
    ) {
      throw new BadRequestException({ error: 'E-mail format is invalid.' });
    }

    return { email, name };
  }
}

export default UserEntity;
