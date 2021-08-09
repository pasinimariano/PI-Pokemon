import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './Components/App';
import Store from './Redux/Store';
import reportWebVitals from './System/reportWebVitals';

ReactDOM.render(
    <Provider store={Store}>
        <React.StrictMode>
            <Router>
                <App />
            </Router>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();