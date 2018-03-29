import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createClient } from 'http';

const mountNode = document.getElementById('app');

class VisibilityToggle extends Component{
    constructor(props){
        super();
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility : false
        };
    }
    toggleVisibility(){
        this.setState((prevState)=>{
            return {
                visibility : !prevState.visibility
            };
        });
    }
    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>
                    {
                        this.state.visibility ? 'Hide details' : 'Show details'
                    }      
                </button>
                {
                    this.state.visibility && (
                        <div>
                            <p>Hey there is some details you can see!</p>
                        </div>
                    )
                }
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />,mountNode);