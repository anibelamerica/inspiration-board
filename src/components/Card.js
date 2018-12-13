import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    const { text, emoji } = this.props.card;
    const emojiLib = require("emoji-dictionary");

    return (
      <div className="card">
        <div className="card__content">
          { text &&
            <h1 className='card__content-text'>{text}</h1>}
          { emoji &&
            <div className='card__content-emoji'>{emojiLib.getUnicode(emoji)}</div>}
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  card: PropTypes.object,
  // text: PropTypes.string,
  // emoji: PropTypes.string,
};

export default Card;
