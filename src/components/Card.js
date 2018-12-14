import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    const { id, text, emoji } = this.props.card;
    const emojiLib = require("emoji-dictionary");
    // console.log(this.props.card);

    return (
      <div className="card">
        <div className="card__content">
          { text &&
            <h1 className='card__content-text'>{text}</h1>}
          { emoji &&
            <div className='card__content-emoji'>{emojiLib.getUnicode(emoji)}</div>}
          <div>
            <button
              className='card__delete'
              onClick={() => this.props.deleteCardCallback(id)}>Delete</button>
          </div>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  card: PropTypes.object,
  deleteCardCallback: PropTypes.func
  // text: PropTypes.string,
  // emoji: PropTypes.string,
};

export default Card;
