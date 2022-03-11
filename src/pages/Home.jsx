import React from 'react';
import { Link } from 'react-router-dom';
import CardList from '../Components/CardList';
import { getCategories,
  getProductsFromQuery,
  getProductsFromCategoryId } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      apiResult: [],
      queryInput: '',
      categoryId: '',
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleChange({ target }) {
    this.setState({
      queryInput: target.value,
    });
  }

  async handleSubmit(event) {
    const { queryInput } = this.state;
    event.preventDefault();
    const query = await getProductsFromQuery(queryInput);
    this.setState({
      apiResult: query.results,
    });
  }

  async handleCategory({ target }) {
    const { categories } = this.state;
    const singleCategory = await categories.find(
      (category) => category.id === target.value,
    );
    this.setState({
      categoryId: singleCategory.id,
    });
    await this.pushCategoryResult();
  }

  pushCategoryResult = async () => {
    const { categoryId } = this.state;
    const categoryProducts = await getProductsFromCategoryId(categoryId);
    this.setState({ apiResult: categoryProducts.results });
  }

  fetchCategories = async () => {
    const categories = await getCategories();
    this.setState({ categories });
  }

  render() {
    const {
      apiResult,
      queryInput,
      categories,
    } = this.state;
    return (
      <>
        <header>
          <Link
            data-testid="shopping-cart-button"
            to="/Carrinho"
          >
            Carrinho de Compras

          </Link>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </header>
        <aside>
          <div>
            <h5>
              Lista de Categorias
            </h5>
            <div>
              {categories.map(({ id, name }) => (
                <button
                  type="button"
                  key={ id }
                  data-testid="category"
                  onClick={ (event) => this.handleCategory(event) }
                  value={ id }
                >
                  { name }
                </button>
              ))}
            </div>
          </div>
        </aside>
        <main>
          <form>
            <label htmlFor="query-input">
              <input
                type="text"
                data-testid="query-input"
                id="query-input"
                value={ queryInput }
                onChange={ (event) => this.handleChange(event) }
              />
              <button
                type="submit"
                data-testid="query-button"
                onClick={ (event) => this.handleSubmit(event) }
              >
                Pesquisar
              </button>
            </label>
          </form>
          <CardList
            apiResult={ apiResult }
          />
        </main>
      </>
    );
  }
}

export default Home;

// Requisito 1 - Tamiris Shigaki, Hanna Bacelar, João Victor
// Requisito 3 - Hanna Bacelar
// conflitos de merge feito em grupo
// Requisito 6 - Eduardo Muchak, Renan Aizawa, João Victor, Tamiris
