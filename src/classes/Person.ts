import BasicClass from './Basic';

interface IPerson {
  firstName: string;
  lastName: string;
  age?: number;
}

type TExtendedPerson<Extension> = IPerson & Extension;

export default class Person<T> extends BasicClass<TExtendedPerson<T>> {
  public getFullName(): string {
    return `${this.getState().firstName} ${this.getState().lastName}`;
  }
}
