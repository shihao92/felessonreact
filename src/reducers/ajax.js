import { AJAX_CALL_SUCCESS } from '../actions/type';

let initialState = {
  ajaxCallResult: ''
};

export default function ajaxReducers( state = initialState, action ) {
  switch( action.type ) {
    case AJAX_CALL_SUCCESS:
      return {
        ...state,
        ajaxCallResult: action.payload
      }
    default: return state;
  }
}