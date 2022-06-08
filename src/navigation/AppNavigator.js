import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import tabsConfig from '../config/tabConfig';
import {Text} from '@ui-kitten/components';
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="form"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#4293d7',
        tabBarInactiveTintColor: '#000',
        tabBarShowLabel: false,
      }}>
      {tabsConfig.map((tab, index) => {
        return (
          <Tab.Screen
            key={index}
            name={tab.title}
            component={tab.component}
            options={{
              tabBarIcon: ({color}) => (
                <Text style={{color, fontSize: 24}}>{tab.title}</Text>
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default AppNavigator;
