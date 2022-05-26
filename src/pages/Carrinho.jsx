// import PropTypes from 'prop-types';
import React from 'react';
import ProductCart from '../Components/ProductCart';

class Carrinho extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
    };
  }

  componentDidMount() {
    // const { quantidade } = this.props;
    // this.setState({ quantidade });
    this.getCartItems();
  }

  getCartItems = () => {
    const values = Object.values(localStorage);
    // const teste = localStorage.getItem(values);
    // console.log(teste);
    this.setState({
      cartItems: values,
    });
  }

  render() {
    const { cartItems } = this.state;
    return (
      <>
        {
          cartItems.length <= 0
            ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
            : cartItems.map((item, index) => (
              <ProductCart
                key={ index }
              />
            ))
        }

        <p
          data-testid="shopping-cart-product-quantity"
        >
          {`Quantidade de itens: ${cartItems.length}`}
        </p>

        <span>
          Valor Total R$:
        </span>

        <br />

        <button
          type="submit"
          id="btnFinish"
        >
          Finalizar Compra
        </button>
      </>
    );
  }
}

/* Carrinho.propTypes = {
  price: PropTypes.number.isRequired,
// id: PropTypes.number.isRequired,
}; */

export default Carrinho;
// Hanna Bacelar

//! OK - botão de finalizar compra

//! tag de valor total
// precisa aparecer a soma total de todos os produtos

//! boão X de remover produto
// precisa remover um produto por vez

//* botoes de + && - para adicionar ou remover os produtos
// não pode ser negativo
// precisa aparecer o valor de quantos produtos foi adicionado/removido
// precisa aparecer a soma preço dos produtos
