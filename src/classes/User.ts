import Person from './Person';

export enum EUserRoles {
  NONE = 'NONE',
  ACCOUNTANT = 'ACCOUNTANT',
  ADMIN = 'ADMIN'
}

export interface IUser {
  role: EUserRoles;
}

export default class User extends Person<IUser> {
  public isAdmin() {
    return this.getState().role === EUserRoles.ADMIN;
  }
}
