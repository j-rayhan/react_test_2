import React from 'react';
import { BrowserRouter, Route , Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import ContactPage from '../components/ContactPage';
import ProtfolioPage from '../components/ProtfolioPage';
import ProtfolioItemPage from '../components/ProtfolioItemPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouters = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/contact" component={ContactPage} />
                <Route path="/protfolio" component={ProtfolioPage} exact={true}/>
                <Route path="/protfolio/:id" component={ProtfolioItemPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouters;