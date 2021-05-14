import IUser from './user.interface';

export default interface IUserRepository {
  create(user: IUser): Promise<IUser>;
}
