import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateMovie extends Component {
  constructor() {
    super()
    this.state = this.props;
  };

  render () {
    return (
      <div>
        <button>Generate Random Movie Title</button>
      </div>
    )
  }

};

export default CreateMovie;