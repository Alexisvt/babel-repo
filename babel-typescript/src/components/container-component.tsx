import * as React from 'react';
import { bindActionCreators, ActionCreator } from 'redux';
import { connect } from 'react-redux';
import { IStoreState } from '../store';
import  actions from '../actions/user-actions';
import { IUserAction } from '../actions/actions-intefaces';
import { IUserState } from '../reducers';
import UserViewer from './userviewer-component';
import { UserCreator } from './usercreator-component';

// import { addUserAction, removeUserAction, updateUserAction } from '../actions/user-actions';

interface IContainerProps {
  // addUser?: (user: IUserState) => Function;
  users: IUserState[];
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

    return (
      <div>
        <UserCreator saveHandler={this.props.actionsprops.addUserAction}></UserCreator>
        <UserViewer users={this.props.users}></UserViewer>
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

/* 
    This commented lines are an example of how to manually map each action without using 
    the bindActionCreators from redux, I will keep this here to have a reference how we can do it
    also pay attention to the interface for ContainerComponent props, the line commented is need to
     inform that the props is available to use inside the component as prop
*/
// const matDispatchToProps = (dispatch: Function) => {
//   return {
//     addUser: (user: IUserState) => dispatch(addUserAction(user))
//   };
// };

// export default connect(mapStateToProps, matDispatchToProps)(ContainerComponent);