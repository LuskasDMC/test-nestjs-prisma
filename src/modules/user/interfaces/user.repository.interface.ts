import IUser from './user.interface';

export default interface IUserRepository {
  create(data: IUser): Promise<IUser>;
  getAllUsers(): Promise<IUser[]>;
  getById(id: number): Promise<IUser>;
}
