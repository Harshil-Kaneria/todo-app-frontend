"use client";
import { store, persistor } from '@/redux/store'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AuthUserDataService from '@/helper-services/authUserDataService';
import ProtectedPageService from '@/helper-services/protectedPageService';

export default function Provider({ children }) {

  return <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AuthUserDataService />
      <ProtectedPageService />
      {children}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </PersistGate>
  </ReduxProvider>;
}