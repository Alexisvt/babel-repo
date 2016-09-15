import { IUserState } from '../reducers/userReducer';
import { IUserAction } from './actions-intefaces';
import { ActionCreator, ActionCreatorsMapObject } from 'redux';


export const addUserAction: ActionCreator<IUserAction> = (userInfo: IUserState): IUserAction => {
  return {
    type: 'ADD_USER',
    payload: userInfo
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


export default ({
  getUsersAction,
  updateUserAction,
  removeUserAction,
  addUserAction
});