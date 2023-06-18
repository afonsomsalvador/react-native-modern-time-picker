# REACT-NATIVE-MODERN-TIME-PICKER

<table align="right">
   <tr>
      <td><img src="docs/ezgif.com-crop.gif" alt="React Native Modern Time Picker" height="500px" style="margin-right:10px" /></td>
   </tr>
</table>


The `TimePicker` component is a React Native component that allows selecting values for days, hours, and minutes.

## Installation

To use the TimePicker component in your project, follow the steps below:

1. Make sure you have Node.js and npm (or yarn) installed in your development environment.

2. Open the terminal and navigate to the root directory of your project.

3. Run the following command to install the component via npm:

```shell
npm install react-native-modern-time-picker
```

or if you're using yarn, run:

```shell
yarn add react-native-modern-time-picker
```

4. Import the TimePicker component in your JavaScript/TypeScript file where you want to use it:

```jsx
import TimePicker from 'react-native-modern-time-picker'
```

Now you're ready to start using the TimePicker component in your project!

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

```

## Contributing

Contributions are welcome! Here are some ways you can contribute to this project:

- Report bugs or suggest improvements by creating a new issue.
- Fix bugs or implement new features by submitting a pull request.
- Improve the documentation by suggesting changes or adding examples.
- Help others by answering questions and providing support in the project's issue tracker.

To contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch for your contribution.
3. Make the necessary changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request to the original repository.

Please ensure that your contributions adhere to the project's coding guidelines and follow best practices. Also, make sure to provide a clear description of your changes in the pull request.

Thank you for contributing to this project!

## Connect with Me and Share

If you find this TimePicker component helpful, I would appreciate it if you could connect with me on LinkedIn and share your experience of using it.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue)](https://www.linkedin.com/in/afonso-salvador/)

