// dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';


// Assets
import './css/Contents.css';

class Contents extends Component {
  static propTypes = {
    body : PropTypes.object
  }
  render() {
    const { body } = this.props;
    return (
      <div className="Content">
        { body }
      </div>
    );
  }
}

export default Contents;
