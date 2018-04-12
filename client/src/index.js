import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import muiTheme from './config/theme';

import Layout from './components/Layout';
import Login from './containers/Login';
import Items from './containers/Items';
import Share from './containers/Share';
import NotFound from './containers/NotFound';

import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

const Boomtown = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Layout>
            <Router>
                <Switch>
                    <Route exact path="/" component={Items} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/share" component={Share} />
                    <Route path="/*" component={NotFound} />

                </Switch>
            </Router>
        </Layout>
    </MuiThemeProvider>
);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
