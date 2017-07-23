type TPartialState <T> = {
  [P in keyof T]: T[P];
};

export default class BasicClass<T> {
  public data: T;

  constructor(data: T) {
    this.data = data;
  }

  public getState(prop?: string): T | TPartialState<T> {
    if (prop) {
      return this.data[prop];
    }
    else {
      return this.data;
    }
  }
}
