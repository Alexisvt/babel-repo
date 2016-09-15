import * as React from 'react';
import { IUserState } from '../reducers';

interface IUserViewer {
  users: IUserState[];
}

const UserViewer: React.StatelessComponent<IUserViewer> = (props) => {

  let userList = props.users.
    map((user: IUserState, index: number) =>
      (
        <ul key={index}>
          <li>{user.userName}</li>
          <li>{user.age}</li>
          <li>{user.email}</li>
        </ul>
      )
    );

  return (<div>
    <h1>User List</h1>
    <div>{userList}</div>
  </div>
  );
};

export { UserViewer as default };