import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const mountNode = document.getElementById('app');

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
    render(){
        return (<div>
                Action
            </div>);
    }
}

class Options extends Component{
    render(){
        return (<div>
            {this.props.options.map((option) => <Option key={option} optionTex={option} />)}
        </div>);
    }
}

class Option extends Component{
    render(){
        return (<div>
                {this.props.optionTex}
            </div>);
    }
}

class AddOption extends Component{
    render(){
        return (<div>
                AddOption
            </div>);
    }
}

ReactDOM.render(<IndecisionApp />,mountNode);