import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './component/IndecisionApp';
import { createClient } from 'http';
import "./styles/styles.scss";

const mountNode = document.getElementById('app');
ReactDOM.render(<IndecisionApp />,mountNode);