import React, { Component } from 'react';
import Button from './Component/Button';
import Input from './Component/Input';

import './App.css';
import ClearButton from './Component/ClearButton';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      previousNumber: " ",
      currentNumber: "",
      operator: ""
    };
  }
  addToInput = value => {
    this.setState({ input: this.state.input + value });
  };

  addToDecimal = value => {
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + value })
    }
  }
  addZeroToInput = value => {
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + value })
    }
  }
  handleInput = value => {
    this.setState({ input: "" })
  }

  add = value => {
    this.state.previousNumber = this.state.input
    this.setState({ input: " " })
    this.state.operator = "plus"
  }

  subtract = value => {
    this.state.previousNumber = this.state.input
    this.setState({ input: " " })
    this.state.operator = "subtract"
  }
  devide = value => {
    this.state.previousNumber = this.state.input
    this.setState({ input: " " })
    this.state.operator = "devide"
  }

  multiply = value => {
    this.state.previousNumber = this.state.input
    this.setState({ input: " " })
    this.state.operator = "multiply"
  }





  evalute = value => {
    this.state.currentNumber = this.state.input
    if (this.state.operator == "plus") {
      this.setState(
        {
          input: parseInt(this.state.previousNumber)
            + parseInt(this.state.currentNumber)
        })

    } else if (this.state.operator == "subtract") {
      this.setState(
        {
          input: parseInt(this.state.previousNumber)
            - parseInt(this.state.currentNumber)
        })
    }
    else if (this.state.operator == "multiply") {
      this.setState(
        {
          input: parseInt(this.state.previousNumber)
            * parseInt(this.state.currentNumber)
        })
    } else if (this.state.operator == "devide") {
      this.setState(
        {
          input: parseInt(this.state.previousNumber)
            / parseInt(this.state.currentNumber)
        })
    }


  };
  render() {
    return (
      <div className="App">
        <div className='calc-wrapper'>
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
          <div className='row'>
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.devide}>/</Button>
          </div>
          <div className='row'>
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.multiply}>*</Button>
          </div>
          <div className='row'>
            <Button handleClick={this.addToInput}>1</Button>

            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className='row'>
            <Button handleClick={this.addToDecimal} >.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.evalute}>=</Button>
            <Button handleClick={this.subtract}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={this.handleInput}>Clear</ClearButton>

          </div>
        </div>
      </div>
    );
  }
}


