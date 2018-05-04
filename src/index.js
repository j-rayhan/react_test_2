import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
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

const NotFoundPage = () =>(
    <div>
        404!
    </div>
)
const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
)
const mountNode = document.getElementById('app');
ReactDOM.render(routes,mountNode);