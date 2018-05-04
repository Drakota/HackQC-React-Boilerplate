import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { ConnectedRouter } from 'react-router-redux';
import { PersistGate } from 'redux-persist/integration/react';
import createHistory from 'history/createBrowserHistory';
import 'antd/dist/antd.css';

export const history = createHistory();
const {store, persistor} = configureStore(history);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ConnectedRouter history={history}>
                    <App />
            </ConnectedRouter>
        </PersistGate>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
