import React from 'react';
import ReactDOM from 'react-dom';

import { Root } from 'Root';
import { AppProviders } from 'providers/AppProviders';

import { foo, Bar } from '@react-monorepo/common';

foo();

const bar: Bar = {
  baz: 'baz',
};

console.log(bar);

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <Root />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root')
);
