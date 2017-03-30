import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory, Router } from 'react-router';
import routes from './routes.js';

injectTapEventPlugin();

render(
  <MuiThemeProvider>
    <Router history={browserHistory} routes={routes} />
  </MuiThemeProvider>,
  document.getElementById('app')
);
