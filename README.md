# REACT-NATIVE-MODERN-TIME-PICKER

The `TimePicker` component is a React Native component that allows selecting values for days, hours, and minutes.

## Props

The `TimePicker` component accepts the following props:

- `minutesValue` (required): Object containing the following properties:
  - `totalValue` (number): The total number of values available for minutes.
  - `textValue` (string): The text displayed next to each minute value.
  - `initialValue` (optional): The initial value for minutes.

- `hoursValue` (required): Object containing the following properties:
  - `totalValue` (number): The total number of values available for hours.
  - `textValue` (string): The text displayed next to each hour value.
  - `initialValue` (optional): The initial value for hours.

- `daysValue` (optional): Object containing the following properties:
  - `totalValue` (number): The total number of values available for days.
  - `textValue` (string): The text displayed next to each day value.
  - `initialValue` (optional): The initial value for days.

- `dividerStyle` (optional): Style applied to the divider between the time values.

- `textValueStyle` (optional): Style applied to the text displayed next to each time value.

- `valueSelectedStyle` (optional): Style applied to the selected value.

- `valueUnselectedStyle` (optional): Style applied to the unselected values.

- `style` (optional): Additional style applied to the `TimePicker` component.

- `onValuesSelected` (required): Function called when the time values are selected. Receives an object containing the `days`, `hours`, and `minutes` properties, representing the selected values for days, hours, and minutes respectively.

## Example Usage

```jsx
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
