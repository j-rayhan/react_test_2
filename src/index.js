import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createClient } from 'http';

const mountNode = document.getElementById('app');

const app = {
    title: 'Indecision App',
    subtitle: 'Input Something in the Computer',
    options: ['First Option', 'Second Option']
  }

class IndecisionApp extends Component{
    constructor(props){
        super(props);
        this.removeAllOptions = this.removeAllOptions.bind(this);
        this.doSomthing = this.doSomthing.bind(this);
        this.addOption = this.addOption.bind(this);
        this.state ={
            options : []
        };
    }
    removeAllOptions(){
        this.setState((prevState)=>{
            return {
                options: []
            }
        })
    }
    doSomthing(){
        // alert('doSomthing');
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    addOption(option){
        // console.log(option);
        if (!option) {
            return 'Enter a Valid Option';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This Option already exists!';
        } else {
            this.setState((prevState)=>{
                return {
                    options : prevState.options.concat(option)
                };
            });    
        }
        
    }
    render(){
        return(
            <div>
            <Header title={app.title} />
            <Action doSomthing={this.doSomthing} hasOptions={this.state.options.length > 0} />
            <Options options={this.state.options} removeAllOptions={this.removeAllOptions} />
            <AddOption addOption={this.addOption} />
            </div>
        );
    }
}

class Header extends Component{
    render(){
        return (<div><h1>{this.props.title}</h1></div>);
    }
}

class Action extends Component{
    render(){
        return (<div>
                <button 
                onClick={this.props.doSomthing} 
                disabled={!this.props.hasOptions}
                > What should i Do?</button>
            </div>);
    }
}

class Options extends Component{
    render(){
        return (<div>
            <button onClick={this.props.removeAllOptions}>Remove All </button>
            {this.props.options.map((option) => <Option key={option} optionTex={option} />)}
        </div>);
    }
}

class Option extends Component{
    render(){
        return (<div>
                {this.props.optionTex}<button >x</button>
            </div>);
    }
}

class AddOption extends Component{
    constructor(props){
        super(props);
        this.addOption = this.addOption.bind(this);
        this.state ={
            error: undefined
        };
    }
    addOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        const error = this.props.addOption(option);
        this.setState({
            error: error
        });
    }
    render(){
        return (<div>
            {this.state.error && (<p>{this.state.error}</p>)}
            <form onSubmit={this.addOption}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
            </div>);
    }
}

ReactDOM.render(<IndecisionApp />,mountNode);