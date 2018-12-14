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
    console.log(this.state);
  }

  getFormFields = () => {
    return FIELDS.map((field, i) => {
      return <div key={i}>
        <label htmlFor={field} className="new-card-form__form-label">{field}</label>
        <input
          name={field}
          type="text"
          value={this.state[field]}
          onChange={this.onInputChange}
          className="new-card-form__form-textarea"/>
      </div>
    })
  };

  resetState = () => {
    this.setState({
      text: '',
      emoji: ''
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    const { text, emoji} = this.state;

    this.props.addCardCallback(this.state);
    this.resetState();
  }

//   getFields() {
//   const exampleFormat = this.props.fields.map((field) => {
//     if (field.key) {
//       return <input
//         placeholder={field.placeholder}
//         name={field.key}
//         type="text"
//         value={this.state[field.key]}
//         onChange={this.onInputChange}
//         className={this.inputValid(field.key)}/>
//
//     } else {
//       return field;
//     }
//   });
//   return exampleFormat;
// }

  render() {
    return (
      <section className="new-card-form">
        <section className="new-card-form__header">Send an Inspiration!</section>
        <form
          className="new-card-form__form"
          onSubmit={this.onFormSubmit}>
          { this.getFormFields() }
          <div>
            <input type="submit" value="Submit" className="new-card-form__form-button" />
          </div>

        </form>

      </section>
    );
  }


}

const FIELDS = ['text', 'emoji'];

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func,
};

export default NewCardForm;
