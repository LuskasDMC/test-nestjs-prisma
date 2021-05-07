export interface ITransaction {
  id?: number;
  value: number;
  accountId: number;
  createdAt?: Date;
  updatedAt?: Date;
}
