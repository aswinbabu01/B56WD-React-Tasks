import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/Store';
import Cartpage from './Cartpage';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <Cartpage/>
    </Provider>
  );
}

export default App;
