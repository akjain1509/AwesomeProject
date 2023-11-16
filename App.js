import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/Features/store';
import Toast from 'react-native-toast-message';
import RootNavigation from './src/navigation/rootNavigation';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigation />
      </PersistGate>
      <Toast />
    </Provider>
  );
}

export default App;
