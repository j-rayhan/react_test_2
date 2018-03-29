import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createClient } from 'http';

const mountNode = document.getElementById('app');

class Counter extends Component{
    constructor(props){
        super();
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.resetAll = this.resetAll.bind(this);
        this.state = {
            count : 0
        };
    }
    addOne(){
        this.setState((prevState) =>{
            return {
                count: prevState.count + 1
            };
        });
    }
    minusOne(){
        this.setState((prevState) =>{
            return {
                count: prevState.count - 1
            };
        });
    }
    resetAll(){
        this.setState(() =>{
            return {
                count: 0
            };
        });
    }
    render(){
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.resetAll}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />,mountNode);