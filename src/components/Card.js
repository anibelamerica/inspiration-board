import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   text: this.props.card.text,
    //   emoji: this.props.card.emoji
    // };
    //
    // console.log(this.state);
    // console.log(props);
    // console.log(props);
  }

  render() {
    const { text, emoji } = this.props.card;
    return (
      <div className="card card__content">
        { text &&
          <h1 className='card__content-text'>{text}</h1>}
        { emoji &&
          <div className='card__content-emoji'>{emoji}</div>}
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
