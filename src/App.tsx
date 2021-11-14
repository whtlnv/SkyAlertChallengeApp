import React from 'react';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {useNavigationPersistence} from './app/navigation/NavigationUtilities';
import * as storage from './app/shared/utils/storage';
import {RootNavigator} from './app/navigation/RootNavigator';

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

const App = () => {
  const {initialNavigationState, onNavigationStateChange} =
    useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY);

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <RootNavigator
        initialState={initialNavigationState}
        onStateChange={onNavigationStateChange}
      />
    </SafeAreaProvider>
  );
};

export default App;
