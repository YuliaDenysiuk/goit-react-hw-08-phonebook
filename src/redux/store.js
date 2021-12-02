import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth';
import {contactsReducer} from './contacts';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token']
};

const store = configureStore({
  reducer: {
      auth: persistReducer(persistConfig, authReducer),
      contacts: contactsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(logger),
    devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export {store, persistor};
