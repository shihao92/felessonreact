import React, { Component } from 'react';

import logo from './logo.svg';
import './index.css';

class Header extends Component {
  state = {
    theme: ''
  };

  componentDidMount() {
    const { theme } = this.props;
    this.setState({
      theme: theme
    });
  }

  shouldComponentUpdate( nextProps, nextState ) {
    if( nextProps.theme !== this.state.theme ) {
      this.setState({
        theme: nextProps.theme
      });
    }
    return true;
  }

  render() {
    return (
      <header
        className="App-header"
        style={{
          backgroundColor: this.state.theme === 'dark' ? '#282c34' : '#fff',
          color: this.state.theme === 'dark' ? '#fff' : '#000'
        }}>
        <img src={ logo } className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    )
  }
}

export default Header;