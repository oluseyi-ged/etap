/* eslint-disable react-native/no-inline-styles */

import {RF} from '@helpers';
import React, {FC, useEffect} from 'react';
import {Text, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import style from './styles';

export const SplashScreen: FC = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2300);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={style.container}>
      <Animatable.View animation="flash" direction="normal" duration={2000}>
        <Animatable.View animation="fadeIn" duration={2300}>
          <Text
            style={{
              fontSize: RF(48),
              fontStyle: 'italic',
              fontWeight: '700',
              color: '#000',
            }}>
            ETAP
          </Text>
        </Animatable.View>
      </Animatable.View>
    </View>
  );
};
