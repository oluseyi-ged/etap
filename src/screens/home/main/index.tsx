/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {SizedBox} from '@components';
import {setLog} from '@slices/log';
import generateRandomDataAsync from '@utils/dataSimulator';
import {generateSimulatedJourneyData} from '@utils/simulatedLog';
import React, {FC, useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import SwitchToggle from 'react-native-switch-toggle';
import {RootState, useAppDispatch, useAppSelector} from 'store';
import style from './styles';

export const Home: FC = ({navigation}: any) => {
  const [isJourneyActive, setJourneyActive] = useState(false);
  const {log} = useAppSelector<any>((store: RootState) => store);
  console.log('first', typeof log);
  const dispatch = useAppDispatch();

  const [data, setData] = useState<any>({
    speed: 0,
    rpm: 0,
    fuelLevel: 0,
    engineTemperature: 0,
    latitude: 0,
    longitude: 0,
  });

  const fetchData = async () => {
    const randomData = await generateRandomDataAsync();
    setData(randomData);
  };

  useEffect(() => {
    let intervalId;

    if (isJourneyActive) {
      intervalId = setInterval(() => {
        fetchData();
      }, 5000);
    } else {
      clearInterval(intervalId);
      setData({
        speed: 0,
        rpm: 0,
        fuelLevel: 0,
        engineTemperature: 0,
        latitude: 0,
        longitude: 0,
      });
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isJourneyActive]);

  const dashboardData = [
    {
      key: 'Speed',
      value: `${data?.speed} KM/h`,
    },
    {
      key: 'RPM',
      value: data?.rpm,
    },
    {
      key: 'Fuel Level',
      value: `${data?.fuelLevel}%`,
    },
    {
      key: 'Engine Temp.',
      value: `${data?.engineTemperature}°C`,
    },
  ];

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
            <Text style={style.mainLabel}>Welcome Tiwa!</Text>
            <Text style={style.subLabel}>Ready to go again?</Text>
          </View>
          <SizedBox height={50} />
          <View style={style.statGrid}>
            {dashboardData?.map((stat, i) => (
              <View style={style.statBox}>
                <Text style={style.statValue}>{stat?.value}</Text>
                <Text style={style.statKey}>{stat?.key}</Text>
              </View>
            ))}
          </View>
        </View>

        <View>
          <View style={style.toggleView}>
            <Text style={style.toggleText}>
              {isJourneyActive ? 'Stop' : 'Start'} Tracking
            </Text>
            <SwitchToggle
              switchOn={isJourneyActive}
              onPress={() => {
                if (isJourneyActive) {
                  setJourneyActive(false);
                  console.log(generateSimulatedJourneyData());
                  dispatch(setLog(generateSimulatedJourneyData()));
                } else {
                  setJourneyActive(true);
                }
              }}
              containerStyle={style.switchContainer}
              circleStyle={style.switchThumb}
              circleColorOff="#ffffff"
              circleColorOn="#ffffff"
              backgroundColorOn="#059AE5"
              backgroundColorOff="#8C8C8C"
            />
          </View>
          <SizedBox height={20} />
          <View style={style.locationGrid}>
            <View>
              <Text style={style.statValue}>{data?.latitude}°</Text>
              <Text style={style.statKey}>Latitude</Text>
            </View>
            <View>
              <Text style={style.statValue}>{data?.longitude}°</Text>
              <Text style={style.statKey}>Longitude</Text>
            </View>
          </View>
          <SizedBox height={150} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
