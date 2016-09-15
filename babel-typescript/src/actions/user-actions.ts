import { IUserState } from '../reducers/states-interface';
import { IUserAction } from './actions-intefaces';
import { ActionCreator, ActionCreatorsMapObject } from 'redux';


export const addUserAction: ActionCreator<IUserAction> = (newUserData: IUserState): IUserAction => {
  return {
    type: 'ADD_USER',
    payload: newUserData
  };
};

export const removeUserAction: ActionCreator<IUserAction> = (email: string): IUserAction => {
  return {
    type: 'REMOVE_USER',
    payload: { email }
  };
};

export const updateUserAction: ActionCreator<IUserAction> = (userInfo: IUserState): IUserAction => {
  return {
    type: 'UPDATE_USER',
    payload: userInfo
  };
};

export const getUsersAction: ActionCreator<IUserAction> = () => {
  return {
    type: 'GET_USER'
  };
};

// exporting all actions into a single object literal expression
export default ({
  getUsersAction,
  updateUserAction,
  removeUserAction,
  addUserAction
});