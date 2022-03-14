import React from 'react';

class Carrinho extends React.Component {
  constructor() {
    super();

    this.state = {
      cartItems: [],
    };
  }

  componentDidMount() {
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
              <div key={ index }>
                <p data-testid="shopping-cart-product-name">
                  { item }
                </p>
              </div>
            ))
        }

        <p
          data-testid="shopping-cart-product-quantity"
        >
          {`Quantidade de itens: ${cartItems.length}`}
        </p>
      </>
    );
  }
}

export default Carrinho;
// Hanna Bacelar
