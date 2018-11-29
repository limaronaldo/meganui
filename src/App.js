import React, { ReactDOM, Component } from 'react';
import { Button, Heading, Image, Text, TextInput } from './lib';

if ("development" === process.env.NODE_ENV) {
  const a11y = require("react-a11y").default;
  a11y(React, ReactDOM, {
    rules: {
      "img-uses-alt": "warn",
      "redundant-alt": [
        "warn", ["Image"]
      ]
    }
  });
}

class App extends Component {
  render() {
    return (
      <div>
        <Heading level="1">h1. Megan heading</Heading>
        <Heading level="2">h2. Megan heading</Heading>
        <Heading level="3">h3. Megan heading</Heading>
        <Heading level="4">h4. Megan heading</Heading>
        <Heading level="5">h5. Megan heading</Heading>
        <Heading level="6">h6. Megan heading</Heading>
        <TextInput size="big" placeholder="Placeholder..."/>
        <Image thumbnail alt="" src="https://s3.amazonaws.com/signature-vulpi/pictures/Panda.png"/>        
        <Image thumbnail size="big" alt="" src="https://s3.amazonaws.com/signature-vulpi/pictures/Panda.png"/>        
        <Image thumbnail size="bigger" alt="" src="https://s3.amazonaws.com/signature-vulpi/pictures/Panda.png"/>        
        <Image thumbnail size="biggest" alt="" src="https://s3.amazonaws.com/signature-vulpi/pictures/Panda.png"/>        
        <Text/>
        <Button size="big" color="dark">First Button</Button>
      </div>
    );
  }
}

export default App;
