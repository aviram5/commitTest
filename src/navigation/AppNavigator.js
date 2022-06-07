import React from 'react';
// import {Header} from '~layout/Header';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import tabsConfig from '../config/tabConfig';
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="form">
      {tabsConfig.map((tab, index) => {
        return (
          <Tab.Screen key={index} name={tab.title} component={tab.component} />
        );
      })}
    </Tab.Navigator>
  );
};

export default AppNavigator;
