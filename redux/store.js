import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '@/redux/reducers/rootReducer';
import { authApiSlice } from '@/services/auth/auth';
import { setupListeners } from '@reduxjs/toolkit/query'

const store = configureStore({
  reducer: {
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    ...rootReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApiSlice.middleware)
});

setupListeners(store.dispatch)

export default store;