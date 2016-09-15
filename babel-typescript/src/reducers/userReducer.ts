import { IUserAction } from '../actions/actions-intefaces';

export interface IUserState {
  user?: string;
  age?: number;
  email?: string;
};

const initialState: IUserState[] = [{
  user: 'Alexis',
  age: 35
}];

export function userReducer (state = initialState, action: IUserAction): IUserState[] {
  switch (action.type) {
    case 'GET_USER':
      return state;
    default:
      break;
  }
  return state;
}