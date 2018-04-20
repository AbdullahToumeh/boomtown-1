import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './redux/store';

import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import muiTheme from './config/theme';

import Layout from './components/Layout';
import Routes from './routes';

const Boomtown = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
            <Router>
                <Layout>
                    <Routes />
                </Layout>
            </Router>
        </Provider>
    </MuiThemeProvider>
);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
