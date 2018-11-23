import React from 'react';

import { storiesOf } from '@storybook/react';
import { Heading } from '../lib';

storiesOf('Heading', module)
  .add('Level 1', () => (<Heading level="1">This is a level one heading</Heading>))
  .add('Level 2', () => (<Heading level="2">This is a level two heading</Heading>))
  .add('Level 3', () => (<Heading level="3">This is a level three heading</Heading>))
  .add('Level 4', () => (<Heading level="4">This is a level four heading</Heading>))
  .add('Level 5', () => (<Heading level="5">This is a level five heading</Heading>))
  .add('Level 6', () => (<Heading level="6">This is a level six heading</Heading>))
;
