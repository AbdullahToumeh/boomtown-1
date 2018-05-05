import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { ApolloProvider } from 'react-apollo';
import client from './config/apolloClient';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store';

import './index.css';
import muiTheme from './config/theme';

import Layout from './components/Layout';
import Routes from './routes';

import * as firebase from 'firebase';

//HAVE AN ISLOGGEDIN? VARIABLE IN OUR REDUX STORE THAT CHANGES DEPENDING ON IF AN AUTHENTICATION TOKEN IS AVAILABLE --  NEED TO WRITE AN AUTH REDUCER
// FirebaseAuth.onAuthStateChanged(user => {
//     if (user) {
//         console.log('You have logged in!');
//         // store.dispatch(updateAuthState(user))
//     } else {
//         console.log('You have logged out!');
//         store.dispatch(updateAuthState(false));
//     }
// });

const Boomtown = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <ApolloProvider client={client}>
            <Provider store={store}>
                <Router>
                    <Layout>
                        <Routes />
                    </Layout>
                </Router>
            </Provider>
        </ApolloProvider>
    </MuiThemeProvider>
);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
