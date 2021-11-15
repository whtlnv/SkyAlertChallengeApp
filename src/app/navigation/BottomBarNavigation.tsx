import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CardScreen from '../screens/Card';
import OrdinalScreen from '../screens/Ordinal';
import PolishNotationScreen from '../screens/PolishNotation';

export type BottomParamList = {
  cardScreen: undefined;
  ordinalScreen: undefined;
  polishNotationScreen: undefined;
};

const Tab = createBottomTabNavigator<BottomParamList>();

const BottomBarNavigation = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={{
        tabBarIcon: () => null,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          alignSelf: 'center',
        },
      }}>
      <Tab.Screen
        options={{
          title: 'Card',
        }}
        name="cardScreen"
        component={CardScreen}
      />
      <Tab.Screen
        options={{
          title: 'Ordinal',
        }}
        name="ordinalScreen"
        component={OrdinalScreen}
      />
      <Tab.Screen
        options={{
          title: 'Polish',
        }}
        name="polishNotationScreen"
        component={PolishNotationScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomBarNavigation;
