/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {Accordion, SizedBox} from '@components';
import React, {FC} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {RootState, useAppSelector} from 'store';
import style from './styles';

export const History: FC = ({navigation}: any) => {
  const {logs} = useAppSelector<any>((store: RootState) => store);
  console.log(logs);

  return (
    <SafeAreaView style={style.pageWrap}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        style={style.container}
        contentContainerStyle={{
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <View>
          <SizedBox height={20} />
          <View>
            <Text style={style.mainLabel}>Ride History</Text>
            <Text style={style.subLabel}>Track previous tracks here.</Text>
          </View>
          <SizedBox height={50} />
          <View style={style.statGrid}>
            <Accordion />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
