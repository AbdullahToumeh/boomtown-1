import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './redux/store';

import './index.css';
import muiTheme from './config/theme';

import Layout from './components/Layout';
import Login from './containers/Login';
import Items from './containers/Items';
import Share from './containers/Share';
import NotFound from './containers/NotFound';
import Routes from './routes';

import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

const Boomtown = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
            <Layout>
                <Routes />
            </Layout>
        </Provider>
    </MuiThemeProvider>
);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
