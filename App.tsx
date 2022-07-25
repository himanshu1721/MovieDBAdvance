import React from 'react';
import HomeScreen from './app/modules/HomeScreen';
import {Provider} from 'react-redux';
import Store from './app/features/store';
import Routes from './app/navigation/StackNavigation';
const App = () => {
  return (
    <Provider store={Store}>
      <Routes />
    </Provider>
  );
};

export default App;
