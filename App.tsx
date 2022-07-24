import React from 'react';
import HomeScreen from './app/modules/HomeScreen';
import {Provider} from 'react-redux';
import Store from './app/features/store';
const App = () => {
  return (
    <Provider store={Store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
