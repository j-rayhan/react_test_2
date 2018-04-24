import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import "./styles/styles.scss";

import IndecisionApp from './component/IndecisionApp';

const mountNode = document.getElementById('app');
ReactDOM.render(<IndecisionApp />,mountNode);