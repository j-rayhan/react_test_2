import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route} from 'react-router-dom';
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

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage} />
        </div>
    </BrowserRouter>
)
const mountNode = document.getElementById('app');
ReactDOM.render(routes,mountNode);