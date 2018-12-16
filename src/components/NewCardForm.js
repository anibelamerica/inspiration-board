import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component{

  constructor() {
    super();

    this.state = {
      text: '',
      emoji: ''
    }
  }

  onInputChange = (event) => {
    const newState = {};

    newState[event.target.name] = event.target.value;

    this.setState(newState);
  }

  resetState = () => {
    this.setState({
      text: '',
      emoji: ''
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    // const { text, emoji} = this.state;
    this.props.addCardCallback(this.state);
    this.resetState();
  }

  render() {
    const emojiLib = require("emoji-dictionary");
    const emojiOptions = EMOJI_LIST.map((emoji, i) => {
        return (
          <option
            key={i}
            value={emoji}>
            {emojiLib.getUnicode(emoji)}
          </option>)
      });

    return (
      <section className="new-card-form">
        <section className="new-card-form__header">
          <h1>Send an Inspiration!</h1>
        </section>
        <form
          className="new-card-form__form"
          onSubmit={this.onFormSubmit}>


                <label htmlFor="Text" className="new-card-form__form-label">
                </label>
              <textarea
                name="text"
                type="textarea"
                value={this.state.text}
                onChange={this.onInputChange}
                className="new-card-form__form-textarea"/>

              <select
                name="emoji"
                className="new-card-form__form-select"
                onChange={this.onInputChange}
                value={this.state.emoji}>
                {emojiOptions}
              </select>
            <input type="submit" value="Submit" className="new-card-form__form-button" />


        </form>

      </section>
    );
  }
}


NewCardForm.propTypes = {
  addCardCallback: PropTypes.func,
};

export default NewCardForm;
