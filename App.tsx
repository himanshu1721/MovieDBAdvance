import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import Store from './app/features/store';
import MainStack from './app/navigation';
const App = () => {
  return (
    <Provider store={Store}>
      <MainStack />
    </Provider>
  );
};

export default App;
