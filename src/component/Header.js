import React from 'react';


const Header = (props) => (
    <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            {props.subtitle && <div className="header__subtitle">{props.subtitle}
            </div>}
        </div>
    </div>
);

Header.defaultProps = {
title: 'Defatult Title!'
}

export default Header;