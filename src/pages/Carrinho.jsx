import PropTypes from 'prop-types';
import React from 'react';

class Carrinho extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
      quantidade: 1,
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

  // diminiQuantidade = () => {
  //   const { id, lidaComDiminuicao } = this.props;
  //   const { quantidade } = this.state;
  //   if (quantidade > 1) {
  //     this.setState({
  //       quantidade: quantidade - 1 }, lidaComDiminuicao(id));
  //   }
  // }

  // aumentaQuantidade = () => {
  //   const { id, lidaComAumento } = this.props;
  //   const { quantidade } = this.state;
  //   if (quantidade > 1) {
  //     this.setState({
  //       quantidade: quantidade + 1 }, lidaComAumento(id));
  //   }
  // }

  diminiQuantidade = () => {
    const { quantidade } = this.state;
    if (quantidade > 0) {
      this.setState({
        quantidade: quantidade - 1 });
    }
  }

  aumentaQuantidade = () => {
    const { quantidade } = this.state;
    if (quantidade >= 0) {
      this.setState({
        quantidade: quantidade + 1 });
    }
  }

  render() {
    const { cartItems, quantidade } = this.state;
    const { price } = this.props;
    return (
      <>
        {
          cartItems.length <= 0
            ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
            : cartItems.map((item, index) => (
              <div key={ index }>
                <button
                  type="button"
                >
                  XXXX
                </button>

                <p data-testid="shopping-cart-product-name">
                  { item }
                </p>
                <button
                  type="button"
                  data-testid="product-decrease-quantity"
                  onClick={ (event) => this.diminiQuantidade(event) }
                >
                  -
                </button>
                <input
                  type="text"
                  name="button"
                  id="button"
                  value={ quantidade }
                />

                <button
                  type="button"
                  data-testid="product-increase-quantity"
                  onClick={ (event) => this.aumentaQuantidade(event) }
                >
                  +
                </button>
                <span>
                  {`Valor Total ${price}`}
                </span>
              </div>
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

Carrinho.propTypes = {
  // quantidade: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  // id: PropTypes.number.isRequired,
  // lidaComAumento: PropTypes.func.isRequired,
  // lidaComDiminuição: PropTypes.func.isRequired,
};

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
