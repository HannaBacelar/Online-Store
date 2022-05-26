import React from 'react';

class ProductCart extends React.Component {
  constructor() {
    super();
    this.state = {
      quantidade: 1,
    };
  }

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
        const { quantidade } = this.state;
        return (
          <div>
            <div>
              <button
                type="button"
              >
                XXXX
              </button>

              <p data-testid="shopping-cart-product-name">
                {/* { item } */}
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
                {/* {`Valor Total ${price}`} */}
              </span>
            </div>
          </div>
        );
      }
}

export default ProductCart;
