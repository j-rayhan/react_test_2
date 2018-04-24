import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import IndecisionApp from './component/IndecisionApp';
import "./styles/styles.scss";

const mountNode = document.getElementById('app');
ReactDOM.render(<IndecisionApp />,mountNode);