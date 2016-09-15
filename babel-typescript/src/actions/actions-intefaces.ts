import { IUserState } from '../reducers/states-interface';

export interface IUserAction {
  type: 'ADD_USER' | 'REMOVE_USER' | 'UPDATE_USER' | 'GET_USER';
  payload?: IUserState;
}