import React, { Component } from 'react';

import CustomRouter from './router';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* todo apply router over here */}
        <CustomRouter />
      </div>
    );
  }
}

export default App;