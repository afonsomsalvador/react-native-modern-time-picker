import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TimePicker from './src';

const App = () => {
  const [selectedValues, setSelectedValues] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  const handleValuesSelected = (values: {
    days: number;
    hours: number;
    minutes: number;
  }) => {
    setSelectedValues(values);
  };

  return (
    <View style={styles.container}>
      <TimePicker
        minutesValue={{totalValue: 60, textValue: 'min'}}
        hoursValue={{totalValue: 24, textValue: 'hours'}}
        daysValue={{totalValue: 99, textValue: 'days', initialValue: 20}}
        style={{marginHorizontal: 10}}
        dividerStyle={{fontSize: 30, color: '#000'}}
        textValueStyle={{fontSize: 15, color: '#000'}}
        valueSelectedStyle={{fontSize: 32, marginVertical: -3, color: '#000', opacity: 1}}
        valueUnselectedStyle={{fontSize: 20, marginVertical: 0, color: '#000', opacity: 0.5}}
        onValuesSelected={handleValuesSelected}
      />
      <Text>
        Selected Values: {selectedValues.days} days, {selectedValues.hours} hours, {selectedValues.minutes} minutes
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default App;
