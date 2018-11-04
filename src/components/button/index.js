import React, { Component } from 'react';

class Button extends Component {
  render() {
    const {
      className,
      text,
      onClick,
      style
    } = this.props;
    return (
      <button
        style={ style }
        className={ className }
        onClick={ onClick }>
        { text }
      </button>
    )
  }
}

export default Button;