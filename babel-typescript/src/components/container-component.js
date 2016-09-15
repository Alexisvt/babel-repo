"use strict";
const React = require('react');
const redux_1 = require('redux');
const react_redux_1 = require('react-redux');
// import { addUserAction, removeUserAction, updateUserAction } from '../actions/user-actions';
const user_actions_1 = require('../actions/user-actions');
class ContainerComponent extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        this.props.actionsprops.getUsersAction();
    }
    render() {
        let userList = this.props.users.
            map((user, index) => React.createElement("li", {key: index}, user.user));
        return (React.createElement("div", null, 
            React.createElement("h1", null, "User List"), 
            React.createElement("ul", null, userList)));
    }
}
const mapStateToProps = (state) => ({
    users: state.users
});
const matDispatchToProps = (dispatch) => {
    return {
        actionsprops: redux_1.bindActionCreators(user_actions_1.default, dispatch)
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, matDispatchToProps)(ContainerComponent);
// const matDispatchToProps = (dispatch: Function) => {
//   return {
//     addUser: (user: IUserState) => dispatch(addUserAction(user))
//   };
// };
// export default connect(mapStateToProps, matDispatchToProps)(ContainerComponent); 
