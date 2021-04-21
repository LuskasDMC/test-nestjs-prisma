import IUser from './interfaces/user.interface';

class UserEntity {
  static create({ email, name }: IUser): IUser {
    if (!email) {
      throw new Error('E-mail is required');
    }

    if (!name) {
      throw new Error('Name is required');
    }

    return { email, name };
  }
}

export default UserEntity;
