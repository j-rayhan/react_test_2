import React from 'react';

const ProtfolioItemPage = (props) => {
    console.log(props);
    return (
        <div>
            Editing the component with id {props.match.params.id}
        </div>
    );
};

export default ProtfolioItemPage;