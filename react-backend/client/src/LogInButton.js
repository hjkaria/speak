import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class LogInButton extends Component {
  render() {
    return (
      <div className="LogInButton">
        <Button bsStyle="primary">Log In</Button>
      </div>
    );
  }
}

export default LogInButton;
