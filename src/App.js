import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: 'Anibel',
      boards: []
    };
  }

  componentDidMount() {
    console.log("Grabbing a board");
    axios.get("https://inspiration-board.herokuapp.com/boards")
    .then((response) => {
      const names = response.data.map((board) => {
        return board.board.name
      })
      this.setState({
        boards: names,
      });
    })
    .catch((error) => {
      this.setState({
        error: error.message
      });
    });
  }

  getBoardOptions = () => {
    return this.state.boards.map((board, i) => {
      return <option key={i} value={board}>{board}</option>
    });
  };

  changeBoardName = (event) => {
    // this.setState()
    console.log(event.target.value);
    this.setState({
      value: event.target.value
    });
  }


  render() {
    console.log(this.state.boards);
    return (
      <section>
        <header className="header">
          <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
        </header>

        <section>
          <p>Inspiration board for {this.state.value}</p>
          <select
            onChange={this.changeBoardName}
            value={this.state.value}>
            {this.getBoardOptions()}
          </select>
        </section>
        
        <Board
          url="https://inspiration-board.herokuapp.com/boards/"
          boardName={this.state.value}
          />
      </section>
    );
  }
}

export default App;
