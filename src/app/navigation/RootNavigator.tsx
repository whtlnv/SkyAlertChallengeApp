import React, {ComponentProps} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './NavigationUtilities';
import BottomBarNavigation from './BottomBarNavigation';

interface NavigationProps
  extends Partial<ComponentProps<typeof NavigationContainer>> {}

export const RootNavigator = (props: NavigationProps) => {
  return (
    <NavigationContainer ref={navigationRef} {...props}>
      <BottomBarNavigation />
    </NavigationContainer>
  );
};

RootNavigator.displayName = 'RootNavigator';

const exitRoutes = [''];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
