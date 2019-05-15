import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import './Header.scss';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Herois Marvel</h1>
          <input
            type="text"
            placeholder="Buscar produto"
            onChange={(e) => {
              this.props.dispatch({
                type: "SET_FILTER",
                filter: e.target.value
              })
            }} />
        </div>
      </div>
    )
  }
}

export default (Header);