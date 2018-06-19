import React, { Component } from 'react';
import './css/Contents.css';

class Contents extends Component {
  constructor(){
      super();
      this.state = {
        count: 0,
        number1: 0,
        number2: 0,
        result: 0
      };

      this.handleCountClick = this.handleCountClick.bind(this);
      this.handleResultClick = this.handleResultClick.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
  }
  // Comprueba si el componente ya cargo
  componentDidMount() {
    this.setState((prev) => ({ count: prev.count + 1}));
  }
  handleCountClick(e){
    if(e.target.id === 'add'){
      this.setState((prev) => ({ count: prev.count + 1}));
    }else if (e.target.id === 'subtract' && this.state.count > 0){
      this.setState((prev)=>({ count: prev.count - 1}));
    }else {
      this.setState((prev)=>({ count: 0}));
    }
  }

  handleResultClick(e){
    this.setState((prev) => ({ result :prev.number1 + prev.number2}));
  }

  handleInputChange(e){
    if(e.target.id === 'number1'){
      this.setState({
          number1 : Number(e.target.value)
        });
    }else {
      this.setState({
          number2 : Number(e.target.value)
        });
    }
  }
  render() {
    return (
      <div className="Content">
        <h2>Counter :{ this.state.count }</h2>

        <p>
          <button id="add" onClick= {this.handleCountClick}>+</button>
          <button id="subtract" onClick= {this.handleCountClick}>-</button>
          <button id="reset" onClick= {this.handleCountClick}>reset</button>
        </p>

        <h2>Calculadora</h2>

        <p>
          <input id="number1" type="number" value={this.state.number1} onChange={this.handleInputChange}/>
          +
          <input id="number2" type="number" value={this.state.number2} onChange={this.handleInputChange}/>

                <button id="result" onClick= {this.handleResultClick}>=</button>
        </p>
       {this.state.result}
      </div>
    );
  }
}

export default Contents;
