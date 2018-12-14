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

  deleteCard = (cardId) => {
    console.log(cardId);
    console.log("I'm in the delete card method");
    const deleteURL = "https://inspiration-board.herokuapp.com/cards/" + cardId;

    axios.delete(deleteURL)
    .then((response) => {
      const newCards = [...this.state.cards];
      const index = newCards.findIndex(content => content.card.id === cardId);
      newCards.splice(index, 1);

      this.setState({
        cards: newCards
      });
    })
    .catch((error) => {
      this.setState({
        error: error.message
      });
    });
  };

  // console.log("Trying to add pet in the PetList component");
  // console.log(petData, "petData");
  // axios.post('https://petdibs.herokuapp.com/pets', petData)
  // .then((response) => {
  //   // What should we do when we know the post request worked?
  //   console.log('we definitely have a new pet!', petData);
  //
  //   const updatedPetList = [ ...this.state.pets, petData]
  //
  //   this.setState({
  //     pets: updatedPetList,
  //   })
  // })
  // .catch((error) => {
  //   // What should we do when we know the post request failed?
  // });

  // https://inspiration-board.herokuapp.com/boards/:board_name/cards

  addCard = (cardData) => {
    const POST_INSPO_CARDS_URL = this.props.url + '/' + this.props.boardName + '/cards';
    axios.post(POST_INSPO_CARDS_URL, cardData)
    .then((response) => {
      cardData.id = response.data.card.id;

      const updatedCardDeck = [...this.state.cards, {card: cardData}];

      this.setState({
        cards: updatedCardDeck
      })

    })
    .catch((error) => {
      console.log("no dice");
      this.setState({
        error: error.message
      });
    });

  };

  render() {

    const cardList = this.state.cards.map((cardContainer, i) => {
      return <Card key={i}
        card={cardContainer.card}
        deleteCardCallback={this.deleteCard} />
    });

    return (
      <div className="board">
        <NewCardForm
          addCardCallback={this.addCard}/>
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
