import React from 'react';
import * as eva from '@eva-design/eva';
import AppNavigator from './src/navigation/AppNavigator';
import {store} from './src/Store';
import {Provider as StoreProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {ApplicationProvider} from '@ui-kitten/components';

export default function App() {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <ApplicationProvider {...eva} theme={eva['light']}>
          <AppNavigator />
        </ApplicationProvider>
      </NavigationContainer>
    </StoreProvider>
  );
}
