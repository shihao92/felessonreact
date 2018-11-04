import React, { Component } from 'react';

import Header from '../../components/header';
import Button from '../../components/button';

class MainPage extends Component {
  state = {
    theme: ''
  };

  componentDidMount() {
    this.setState({
      theme: 'dark'
    });
  }

  onClickChangeThemeButton() {
    // Callback or Promise
    this.setState( prevState => ({
      theme: prevState.theme === 'dark' ? 'light' : 'dark'
    }));
  }

  render() {
    return (
      <div>
        <Header theme={ this.state.theme } />
        <Button
          className={ 'btn btn-primary' }
          style={{
            marginTop: '10px'
          }}
          text={ 'Change Theme' }
          onClick={ () => {
            this.onClickChangeThemeButton();
          }} />
      </div>
    )
  }
}

export default MainPage;