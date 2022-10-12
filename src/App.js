
import React, { Component } from 'react';

import Navbar from './Component/navbar';
import Counters from "./Component/counters";
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: [
        { id: 0, value: 4 },
        { id: 1, value: 0 },
        { id: 2, value: 2 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
        { id: 5, value: 6 },
      ],
      counterLength: 0,
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleIncrement = (c) => {
    const counters = [...this.state.counter];
    const index = counters.indexOf(c);
    counters[index] = { ...c };
    counters[index].value++;

    this.setState(() => {
      return {
        counter: counters,
      };
    });
  };

  handleClickRest = (c) => {
    const counters = this.state.counter.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState(() => {
      return {
        counter: counters,
      };
    });
  };

  handleDelete = (counterId) => {
    console.log(counterId);
    const counters = this.state.counter.filter((c) => c.id !== counterId);
    this.setState((prevState) => {
      return {
        counter: counters,
      };
    });
  }

  render() {
    return (
    <div>
      <Navbar counterLength={this.state.counter.filter((c)=>{return c.value > 0}).length} />
      <main>
        <Counters  onDelete={this.handleDelete} onIncrement={this.handleIncrement} handleClickRest={this.handleClickRest} counter={this.state.counter}/>
      </main>
    </div>);
  }
}


export default App;
