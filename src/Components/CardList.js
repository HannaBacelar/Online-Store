import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
  constructor() {
    super();

    this.state = {
      cartItems: [],
    };
  }

  addCarrinho = ({ target }) => {
    const title = target.title;
    const id = target.id;
    localStorage.setItem(id, title);
    this.setState({
      listProducts: title,
    });
  }

  render() {
    const { cartItems } = this.state;
    const { apiResult } = this.props;
    return (
      <div>
        {
          apiResult.length > 0
            ? (
              apiResult.map((result) => (
                <Card
                  key={ result.id }
                  result={ result }
                  cartItems={ cartItems }
                  addCarrinho={ this.addCarrinho }
                />
              )))
            : <h1>Nenhum produto foi encontrado</h1>
        }
      </div>
    );
  }
}

CardList.propTypes = {
  queryInput: PropTypes.string,
  cardList: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default CardList;
