import React from 'react';
// import Option from './Option';

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

export default Options;