import * as React from 'react';
import Inputs, {IUserData} from './Inputs';
import User, {EUserRoles} from '../classes/User';

interface IProps {}

interface IState<UserData> {
  userData: UserData | {};
}

export default class Form extends React.PureComponent <IProps, IState<IUserData>> {
  public state = {
    userData: {
      firstName: '',
      lastName: '',
      role: EUserRoles.NONE,
    }
  };
  public render() {
   const user = new User(this.state.userData);
   const {role} = user.getState();
   const fullName = user.getFullName();
   const isAdmin = user.isAdmin();
   return (
     <div>
       <p><b>User:</b> {fullName}</p>
       {
         isAdmin &&
         <p><b>Role:</b> {role}</p>
       }
       <Inputs onSubmit={this.onFormSubmit}/>
     </div>
   );
  }

  private onFormSubmit = (userData: IUserData): void => {
    this.setState({userData});
  }
}
