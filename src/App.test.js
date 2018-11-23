import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Heading } from './lib';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('h1 renders without crashing', () => {
  const h1 = document.createElement('div');
  ReactDOM.render(<Heading level="1" />, h1);
  ReactDOM.unmountComponentAtNode(h1);
});

