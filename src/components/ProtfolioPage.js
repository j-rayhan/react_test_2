import React from 'react';
import { Link } from "react-router-dom";
const ProtfolioPage = () => (
    <div>
        This is ProtfolioPage Component
        <Link to='/protfolio/1'> First protofolio </Link>
        <Link to='/protfolio/2'> Second protofolio </Link>
    </div>
);

export default ProtfolioPage;