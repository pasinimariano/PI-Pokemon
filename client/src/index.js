import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import reduxStore from './Redux/Store';
import App from './Components/App';
import reportWebVitals from './System/reportWebVitals';

const { Store, Persistor } = reduxStore;
Persistor.purge()
ReactDOM.render(
    <Provider store={Store}>
        <React.StrictMode>
            <Router>
                <PersistGate persistor={Persistor}>
                    <App />
                </PersistGate>
            </Router>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();