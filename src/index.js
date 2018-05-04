import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route , Switch, Link } from 'react-router-dom';
import 'normalize.css/normalize.css';
import "./styles/styles.scss";

const ExpenseDashboardPage = () =>(
    <div>
        This is Dashboard
    </div>
)

const AddExpensePage = () =>(
    <div>
        This is Another Component
    </div>
)

const Help = () =>(
    <div>
        This is Help Page
    </div>
)
const NotFoundPage = () =>(
    <div>
        404! <Link to="/">Go Home</Link>
    </div>
)

const Header = () =>(
    <header>
        <h1>header </h1>
        <Link to="/">Home </Link>
        <Link to="/create"> Add </Link>
        <Link to="/help"> Help </Link>
    </header>
)
const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage} />
                <Route path="/help" component={Help} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)
const mountNode = document.getElementById('app');
ReactDOM.render(routes,mountNode);