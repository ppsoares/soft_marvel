import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Hero.scss';

class Hero extends Component {
  state = {
    isGetting: false,
    hasGetError: false,
    product: {}
  }

  render() {
    return (
      <div className="Hero">
        <div className="header">
          <h1>Produto Capitão</h1>
        </div>

        <div className="container">
          <form>
            <fieldset>
              <legend>Descricao</legend>
              <input
                name="description"
                type="text"
                maxLength="150"
                value='Teste'
              />
            </fieldset>
            <button >
              <Link to="/" >Salvar</Link>
            </button>
            <Link to="/" >Cancelar</Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Hero;
