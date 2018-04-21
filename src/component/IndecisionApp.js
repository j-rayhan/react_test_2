import React, {Component} from 'react';
import Header from './Header';
import Action from './Action';
import AddOption from './AddOption';
import Options from './Options';
import OptionsModal from './OptionsModal';

class IndecisionApp extends Component{
    state ={
        options : [],
        selectedOption: undefined
    };
    componentDidMount = () => {
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
    componentDidUpdate = (prevProps, prevState) => {
        // It's will call when component change state or props 
        // This action do not fire if have not any change
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options); // js {} to json
            localStorage.setItem('options',json);
        }
    }
    componentWillUnmount = () => {
        // It's will call when switch pages or render something complletly new 
        console.log("component will unmount");
    }
    // LocalStorage only storeg string data with key value
    removeAllOptions = () => {
        this.setState(() => ({options: []}));
    }
    removeOption = (optionToDelete) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToDelete !== option)
        }));
    }
    doSomthing = () => {
        // alert('doSomthing');
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({selectedOption: option}))
    }
    addOption = (option) => {
        // console.log(option);
        if (!option) {
            return 'Enter a Valid Option';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This Option already exists!';
        } else {
            this.setState((prevState)=>({options : prevState.options.concat(option)}));    
        }
        
    }
    handelCloseModel = () => {
        // console.log(selectedOption);
        this.setState(() => ({selectedOption: undefined}));
      }
    render(){
        const subtitle = 'Put your life in the hands of a computer';
        return(
            <div>
            <Header subtitle={subtitle}/>
            <Action doSomthing={this.doSomthing} hasOptions={this.state.options.length > 0} />
            <Options options={this.state.options} removeAllOptions={this.removeAllOptions} removeOption={this.removeOption}/>
            <AddOption addOption={this.addOption} />
            <OptionsModal selectedOption={this.state.selectedOption} handelCloseModel={this.handelCloseModel}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options : []
}

export default IndecisionApp;