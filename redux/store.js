import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authApiSlice } from '@/services/auth/auth';
import { setupListeners } from '@reduxjs/toolkit/query';
import rootReducer from '@/redux/reducers/rootReducer';
import { createStateSyncMiddleware,initMessageListener } from "redux-state-sync"

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
    persistedReducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApiSlice.middleware).concat(createStateSyncMiddleware()),
});

initMessageListener(store);

const persistor = persistStore(store);
setupListeners(store.dispatch);

export { store, persistor };