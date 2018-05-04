import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppRouters from './routers/AppRouters';
import 'normalize.css/normalize.css';
import "./styles/styles.scss";

const mountNode = document.getElementById('app');
ReactDOM.render(<AppRouters />,mountNode);