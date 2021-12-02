import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'index.css';
import App from 'App';
import { store, persistor } from 'redux/store';
import { Loader } from 'components/Loader';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>  
      <PersistGate loading={<Loader />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);