"use strict";
;
const initialState = [{
        user: 'Alexis',
        age: 35
    }];
function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_USER':
            return state;
        default:
            break;
    }
    return state;
}
exports.userReducer = userReducer;
