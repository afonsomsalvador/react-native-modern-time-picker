# TimePicker Component

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
import React from 'react';
import { View, StyleSheet } from 'react-native';
import TimePicker from './TimePicker';

const App = () => {
  const handleValuesSelected = (selectedValues) => {
    console.log(selectedValues);
  };

  return (
    <View style={styles.container}>
      <TimePicker
        minutesValue={{
          totalValue: 60,
          textValue: 'min',
          initialValue: 30,
        }}
        hoursValue={{
          totalValue: 24,
          textValue: 'hrs',
          initialValue: 12,
        }}
        daysValue={{
          totalValue: 7,
          textValue: 'days',
          initialValue: 3,
        }}
        dividerStyle={styles.divider}
        textValueStyle={styles.textValue}
        valueSelectedStyle={styles.selectedValue}
        valueUnselectedStyle={styles.unselectedValue}
        style={styles.timePicker}
        onValuesSelected={handleValuesSelected}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timePicker: {
    width: 300,
    height: 200,
  },
  divider: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  textValue: {
    fontSize: 18,
    fontStyle: 'italic',
  },
  selectedValue: {
    color: 'blue',
  },
  unselectedValue: {
    color: 'gray',
  },
});

export default App;
