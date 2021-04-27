import IAccount from './account.interface';

export default interface IAccountRepository {
  create(data: IAccount): Promise<IAccount>;
}
