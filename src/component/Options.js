import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <button onClick={props.removeAllOptions}>Remove All </button>
        {props.options.length === 0 && <p> Please add an option to get started!</p>}
        {props.options.map((option) => (<Option key={option} optionTex={option} removeOption={props.removeOption} />))}
    </div>
);



export default Options;