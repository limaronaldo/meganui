import React, { Component } from 'react';
import { Button, Heading } from './lib';

class App extends Component {
  render() {
    return (
      <div>
        <Heading level="1">Título 1</Heading>
        <Heading level="2">Título 2</Heading>
        <Heading level="3">Título 3</Heading>
        <Heading level="4">Título 4</Heading>
        <Heading level="5">Título 5</Heading>
        <Heading level="6">Título 6</Heading>
      </div>
    );
  }
}

export default App;
