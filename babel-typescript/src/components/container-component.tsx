import * as React from 'react';
import { bindActionCreators, ActionCreator } from 'redux';
import { connect } from 'react-redux';
import { IStoreState } from '../store';
// import { addUserAction, removeUserAction, updateUserAction } from '../actions/user-actions';
import actions from '../actions/user-actions';
import { IUserAction } from '../actions/actions-intefaces';
import { IUserState } from '../reducers/userReducer';

interface IContainerProps {
  users: IUserState[];
  // addUser?: (user: IUserState) => Function;
  actionsprops: {
    getUsersAction: ActionCreator<IUserAction>;
    updateUserAction: ActionCreator<IUserAction>;
    removeUserAction: ActionCreator<IUserAction>;
    addUserAction: ActionCreator<IUserAction>;
  };
}

class ContainerComponent extends React.Component<IContainerProps, void> {

  constructor() {
    super();
  }

  componentDidMount() {
    this.props.actionsprops.getUsersAction();
  }

  render() {
    let userList = this.props.users.
      map((user: IUserState, index: number) => <li key={index}>{user.user}</li>);

    return (
      <div>
        <h1>User List</h1>
        <ul>{userList}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state: IStoreState) => ({
  users: state.users
});

const matDispatchToProps = (dispatch: any) => {
  return {
    actionsprops: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, matDispatchToProps)(ContainerComponent);

// const matDispatchToProps = (dispatch: Function) => {
//   return {
//     addUser: (user: IUserState) => dispatch(addUserAction(user))
//   };
// };

// export default connect(mapStateToProps, matDispatchToProps)(ContainerComponent);