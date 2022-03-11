import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
  render() {
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
