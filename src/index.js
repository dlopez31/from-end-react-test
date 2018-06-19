// Dependencies
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Routes
import AppRoutes from './routes';

// Assets
import './components/global/css/index.css';
import registerServiceWorker from './registerServiceWorker';

render(
<Router>
  <AppRoutes />
</Router>, document.getElementById('root'));
registerServiceWorker();
