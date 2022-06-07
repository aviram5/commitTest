import 'react-native-gesture-handler';
import React from 'react';
import * as eva from '@eva-design/eva';
import AppNavigator from './src/navigation/AppNavigator';
import {store} from './src/Store';
import {Provider as StoreProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

export default function App() {
  return (
    <StoreProvider store={store}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <IconRegistry icons={EvaIconsPack} />
        <NavigationContainer>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider {...eva} theme={eva['light']}>
            <AppNavigator />
          </ApplicationProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </StoreProvider>
  );
}
