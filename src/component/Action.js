import React from 'react';


const Action = (props) => {
    return (<div>
        <button 
        onClick={props.doSomthing} 
        disabled={!props.hasOptions}
        > What should i Do?</button>
    </div>);
};


export default Action;