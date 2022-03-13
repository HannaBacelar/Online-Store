import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsDetails } from '../services/api';

class CardDetails extends Component {
  constructor() {
    super();
    this.state = {
      thumbnail: '',
      title: '',
      price: 0,
      attributes: [],
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const { thumbnail, title, price, attributes } = await getProductsDetails(id);
    this.setState({
      thumbnail,
      title,
      price,
      attributes,
    });
  }

  render() {
    const { thumbnail, title, price, attributes } = this.state;
    return (
      <div>
        <img src={ thumbnail } alt={ title } />
        <p data-testid="product-detail-name">{ title }</p>
        <p>
          R$:
          { price }
        </p>

        {
          attributes.map(({ name, value_name: valueName }) => (
            <p key={ name }>
              {`${name}: ${valueName}`}
            </p>
          ))
        }

        <Link
          data-testid="shopping-cart-button"
          to="/Carrinho"
        >
          Carrinho de Compras

        </Link>
      </div>
    );
  }
}

CardDetails.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default CardDetails;

// Requsito 7 - Feito por Hanna Bacelar e Tamiris Shigaki
