import * as React from 'react';
import {EUserRoles} from '../classes/User';

export interface IUserData {
  firstName: string;
  lastName: string;
  role: EUserRoles;
}

interface IProps {
  onSubmit(userData: IUserData): void;
}

export default class Inputs extends React.PureComponent <IProps, IUserData> {
  public state = {
    lastName: '',
    firstName: '',
    role: EUserRoles.NONE
  };

  public render() {
    const {firstName, lastName} = this.state;
    return (
      <div>
        <input placeholder="first name" value={firstName} onChange={this.onInputChane('firstName')}/>
        <input placeholder="last name" value={lastName} onChange={this.onInputChane('lastName')} />
        <select  onChange={this.onInputChane('role')}>
          <option value={EUserRoles.NONE}>Нет роли</option>
          <option value={EUserRoles.ACCOUNTANT}>Бухгалтер</option>
          <option value={EUserRoles.ADMIN}>Администратор</option>
        </select>
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }

  private onInputChane = (prop) => (e) => {
    this.setState({[prop]: e.target.value});
  }

  private onSubmit = () => {
    this.props.onSubmit(this.state);
  }
}
