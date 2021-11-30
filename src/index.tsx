import React from 'react';
import ReactDOM from 'react-dom';

import { ElonRouter as Router } from '@elonwu/router';

import routes from '@/routes';

import './index.css';

ReactDOM.render(
  // <React.StrictMode>
  <Router basename="/" rootRoutes={routes} loading={<div>loading...</div>} />,
  // </React.StrictMode>
  document.getElementById('root'),
);
