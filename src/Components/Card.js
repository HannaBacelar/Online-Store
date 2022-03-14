import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    const { result, addCarrinho } = this.props;
    const { title, thumbnail, price, id } = result;
    return (
      <div data-testid="product">
        <h3>
          { title }
        </h3>
        <img src={ thumbnail } alt={ title } />
        <br />
        <span>
          R$:
          { price }
        </span>
        <br />
        <Link
          to={ `/cardDetails/${id}` }
          data-testid="product-detail-link"
        >
          Detalhes do Produto
        </Link>
        <br />
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ (event) => addCarrinho(event) }
          title={ title }
          id={ id }
        >
          Adiciona ao Carrinho
        </button>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
}.isRequired;

export default Card;

// Requisito 5 - Feito por: Eduardo Muchak e Tamiris Shigaki
