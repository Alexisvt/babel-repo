import { IUserAction } from '../actions/actions-intefaces';
import { IUserState } from './states-interface';

const initialState: IUserState[] = [{
  userName: 'Alexis',
  age: 35,
  email: 'alexisvt@gmail.com'
}];

export function userReducer (state = initialState, action: IUserAction): IUserState[] {
  switch (action.type) {
    case 'GET_USER':
      return state;
    case 'ADD_USER':
      return [...state, action.payload];
    default:
      break;
  }
  return state;
}