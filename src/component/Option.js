import React from 'react';

const Option = (props) => (
    <div>
        {props.optionTex} <button onClick={(e) => {props.removeOption(props.optionTex)}}>x</button>
    </div>
);

export default Option;