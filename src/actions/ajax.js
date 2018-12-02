import { AJAX_CALL_SUCCESS } from './type';

export function ajaxCall() {
  return ( dispatch, getState ) => {
    dispatch( ajaxCallSuccess( 'testing' ) );
  }
}

function ajaxCallSuccess( payload ) {
  return {
    type: AJAX_CALL_SUCCESS,
    payload
  }
}