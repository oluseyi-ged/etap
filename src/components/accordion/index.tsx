// import { SizedBox } from '@components/sized-box';
import {HDP} from '@helpers';
import moment from 'moment';
import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {RootState, useAppSelector} from 'store';
import styles from './styles';

export const Accordion = () => {
  const {logs} = useAppSelector<any>((store: RootState) => store);

  const [expandedItem, setExpandedItem] = useState(null);

  const toggleItem = id => {
    if (expandedItem === id) {
      setExpandedItem(null); // Collapse the clicked item if it's already expanded
    } else {
      setExpandedItem(id); // Expand the clicked item
    }
  };

  const formatValueWithMeasurement = (key, value) => {
    switch (key) {
      case 'distanceTraveled':
        return `Distance Traveled: ${value} km`;

      case 'averageSpeed':
        return `Average Speed: ${value} km/h`;

      case 'fuelConsumed':
        return `Fuel Consumed: ${value} L`;

      case 'stops':
        return `Stops: ${value}`;

      case 'maxSpeed':
        return `Max Speed: ${value} km/h`;

      case 'vehicleModel':
        return `Vehicle Model: ${value}`;

      case 'weatherCondition':
        return `Weather Condition: ${value}`;

      case 'startDate':
        return `Start Date: ${moment(value).format('DD-MM-YYYY')}`;

      case 'endDate':
        return `End Date: ${moment(value).format('DD-MM-YYYY')}`;

      case 'id':
        return `ID: ${value}`;

      // Add more cases for other keys and their respective measurements here

      default:
        return `${key}: ${value}`;
    }
  };

  const renderItem = ({item}) => {
    const isExpanded = expandedItem === item.id;

    return (
      <TouchableOpacity onPress={() => toggleItem(item.id)}>
        <View style={styles.logItem}>
          <Text style={styles.logLabel}>Trip {item?.id}</Text>
          {isExpanded && (
            <View style={{paddingVertical: HDP(20)}}>
              {Object.keys(item).map(key => (
                <Text style={styles.logText} key={key}>
                  {formatValueWithMeasurement(key, item[key])}
                </Text>
              ))}
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={logs}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
    />
  );
};
