import { store, persistor } from "../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

const MYapp = ({ Component, pageProps }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App Component={Component} pageProps={pageProps} />
    </PersistGate>
  </Provider>
);
export default MYapp;
