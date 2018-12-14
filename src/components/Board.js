import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // cards: CARD_DATA.cards,
      url: this.props.url,
      boardName: this.props.boardName,
      cards: []

    };
  }

  componentDidMount() {
    console.log("Board is mounted!");
    const GET_INSPO_CARDS_URL = this.props.url + '/' + this.props.boardName + '/cards';

    axios.get(GET_INSPO_CARDS_URL)
    .then((response) => {
      this.setState({
        cards: response.data,
      });
    })
    .catch((error) => {
      this.setState({
        error: error.message
      });
    });
  }

  render() {

    const cardList = this.state.cards.map((cardContainer, i) => {
      return <Card key={i}
        card={cardContainer.card} />
    });

    return (
      <div className="board">
        { cardList }
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
