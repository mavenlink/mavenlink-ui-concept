import React from 'react';
import ReactDOM from 'react-dom';
import { BrandLogo } from '../src';

function Index() {
  return <BrandLogo height={200} width={200} />;
}

ReactDOM.render(<Index />, document.getElementById('root'));