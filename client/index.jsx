import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/Root';
import configureStore from './configure-store';

import './style';

require('style!semantic-ui/dist/semantic.min.css');
require('style!material-design-lite/dist/material.min.css');
require('style!material-design-icons/iconfont/material-icons.css');

const store= configureStore();


ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app')
);
