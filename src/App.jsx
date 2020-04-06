import * as math from "mathjs";
import React, { Component } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Operator } from './components/Operator';
import { Equal } from './components/Equal';
import { Input } from './components/Input';
import { ClearButton } from './components/ClearButton';



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      input: ""
    }

  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  handleEqual = () => {
    this.setState({ input: math.evaluate(this.state.input) });
  };

  
  render() {
    return (
      <div className="app">
        <div className="container">
          <Input input={this.state.input} />
          <div className="line">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Operator handleClick={this.addToInput}>/</Operator>
          </div>
          <div className="line">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Operator handleClick={this.addToInput}>*</Operator>
          </div>
          <div className="line">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Operator handleClick={this.addToInput}>-</Operator>
          </div>
          <div className="line">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <ClearButton handleClear={() => this.setState({ input: ""})}>AC</ClearButton>
            <Operator handleClick={this.addToInput}>+</Operator>
          </div>
          <div className="line">
            <Equal handleClick={() => this.handleEqual()}>=</Equal>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
