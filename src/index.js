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
        this.removeOption = this.removeOption.bind(this);
        this.doSomthing = this.doSomthing.bind(this);
        this.addOption = this.addOption.bind(this);
        this.state ={
            options : props.options
        };
    }
    // Lifecycle method only use in calss base component 
    // For more about google (react component lifecycle)
    componentDidMount(){
        // It's call when component mount 
        // console.log('featch data');
        // try catch use of get valid json formate data
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json); // json to js {}
            if(options){
                this.setState(() => ({options}));
            }
        } catch (error) {
            // Do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState){
        // It's will call when component change state or props 
        // This action do not fire if have not any change
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options); // js {} to json
            localStorage.setItem('options',json);
        }
    }
    componentWillUnmount(){
        // It's will call when switch pages or render something complletly new 
        console.log("component will unmount");
    }
    // LocalStorage only storeg string data with key value
    removeAllOptions(){
        this.setState(() => ({options: []}));
    }
    removeOption(optionToDelete){
        this.setState((prevState) => ({
            // options: prevState.options.filter((option) => {
            //     return optionToDelete !== option;
            // });
            options: prevState.options.filter((option) => optionToDelete !== option)
        }));
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
            this.setState((prevState)=>({options : prevState.options.concat(option)}));    
        }
        
    }
    render(){
        return(
            <div>
            <Header />
            <Action doSomthing={this.doSomthing} hasOptions={this.state.options.length > 0} />
            <Options options={this.state.options} removeAllOptions={this.removeAllOptions} removeOption={this.removeOption}/>
            <AddOption addOption={this.addOption} />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options : []
}

const Header = (props) => {
        return (<div><h1>{props.title}</h1>
            {props.subtitle && <h1>{props.subtitle}</h1>}</div>);
}

Header.defaultProps = {
    title: 'defatult Title!'
}

const Action = (props) => {
    return (<div>
        <button 
        onClick={props.doSomthing} 
        disabled={!props.hasOptions}
        > What should i Do?</button>
    </div>);
};

const Options = (props) => {
        return (<div>
            <button onClick={props.removeAllOptions}>Remove All </button>
            {props.options.length === 0 && <p> Please add an option to get started!</p>}
            {props.options.map((option) => (<Option key={option} optionTex={option} removeOption={props.removeOption} />))}
        </div>);
};

const Option = (props) => {
        return (<div>
                {props.optionTex} <button onClick={(e) => {props.removeOption(props.optionTex)}}>x</button>
            </div>);
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
        this.setState(() => ({error}));

        if (!error) {
            e.target.elements.option.value = '';
        }
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

//StateLess functional Component
const User = (props) => {
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );

};

const User_old = function () {
    
};

ReactDOM.render(<IndecisionApp option={app.options} />,mountNode);