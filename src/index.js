import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const mountNode = document.getElementById('app');

// const obj = {
//     name: 'rayhan',
//     getName(){
//         return this.name;
//     }
// }

// // const getN = obj.getName();
// // const getN = obj.getName.bind();
// // const getN = obj.getName.bind(obj);
// const getN = obj.getName.bind({name: 'johir'});

// console.log(getN());

// ---------- For more about bind --------
// search "mdn bind" 

const app = {
    title: 'Indecision App',
    subtitle: 'Input Something in the Computer',
    options: ['First Option', 'Second Option']
  }

class IndecisionApp extends Component{
    render(){
        return(
            <div>
            <Header title={app.title} />
            <Action />
            <Options options={app.options} />
            <AddOption />
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
    doSomthing(){
        alert('some action');
    }
    render(){
        return (<div>
                <button onClick={this.doSomthing}> What should i Do?</button>
            </div>);
    }
}

class Options extends Component{
    constructor(props){
        super();
        this.doRemoveAll = this.doRemoveAll.bind(this);
    }
    doRemoveAll(){
        console.log(this.props.options);
        // alert('remove all');
    }
    render(){
        return (<div>
            <button onClick={this.doRemoveAll}>Remove All </button>
            {this.props.options.map((option) => <Option key={option} optionTex={option} />)}
        </div>);
    }
}

class Option extends Component{
    doRemove(e){
        alert('remove');
    }
    render(){
        return (<div>
                {this.props.optionTex}<button onClick={this.doRemove}>x</button>
            </div>);
    }
}

class AddOption extends Component{
    addOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        if (option) {
            alert(option);
        }
    }
    render(){
        return (<div>
            <form onSubmit={this.addOption}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
            </div>);
    }
}

ReactDOM.render(<IndecisionApp />,mountNode);