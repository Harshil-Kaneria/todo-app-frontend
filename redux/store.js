import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authApiSlice } from '@/services/auth/auth';
import { setupListeners } from '@reduxjs/toolkit/query';
import rootReducer from '@/redux/reducers/rootReducer';


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
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(authApiSlice.middleware),
});

const persistor = persistStore(store);
setupListeners(store.dispatch);

export { store, persistor };