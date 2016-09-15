"use strict";
exports.addUserAction = (userInfo) => {
    return {
        type: 'ADD_USER',
        payload: userInfo
    };
};
exports.removeUserAction = (email) => {
    return {
        type: 'REMOVE_USER',
        payload: { email }
    };
};
exports.updateUserAction = (userInfo) => {
    return {
        type: 'UPDATE_USER',
        payload: userInfo
    };
};
exports.getUsersAction = () => {
    return {
        type: 'GET_USER'
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({
    getUsersAction: exports.getUsersAction,
    updateUserAction: exports.updateUserAction,
    removeUserAction: exports.removeUserAction,
    addUserAction: exports.addUserAction
});
