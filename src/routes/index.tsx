/* eslint-disable react-native/no-inline-styles */
import {Loader} from '@components';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen} from '@screens';
import React from 'react';
import {StatusBar, View} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {RootState, useAppSelector} from 'store';
import AppStackScreens from './AppStack';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const {loading} = useAppSelector((store: RootState) => store);

  return (
    <View style={{position: 'relative', flex: 1}}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Home" component={AppStackScreens} />
        </Stack.Navigator>
      </NavigationContainer>
      {loading && <Loader />}
      <FlashMessage duration={3000} />
    </View>
  );
};

export default RootNavigator;
