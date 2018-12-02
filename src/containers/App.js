import React, { Component } from 'react';
import { connect } from 'react-redux';

import CustomRouter from './router';

import './App.css';

import { ajaxCall } from '../actions/ajax';

class App extends Component {

  shouldComponentUpdate( nextProps, nextState ) {
    // console.log( nextProps.data.ajaxReducers.ajaxCallResult )
    return true;
  }

  componentDidMount() {
    // console.log( this.props.data.ajaxReducers.ajaxCallResult );
    this.props.ajaxCall();
  }

  render() {
    return (
      <div className="App">
        {/* todo apply router over here */}
        <CustomRouter />
      </div>
    );
  }
}

function mapStateToProps( state ) {
  return {
    data: state
  }
}

export default connect( mapStateToProps, {
  ajaxCall
})( App );