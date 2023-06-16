import {
  Animated,
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import {useRef, useState} from 'react';

type Props = {
  minutesValue: {totalValue: number; textValue: string; initialValue?: number};
  hoursValue: {totalValue: number; textValue: string; initialValue?: number};
  daysValue?: {totalValue: number; textValue: string; initialValue?: number};
  dividerStyle?: StyleProp<TextStyle>;
  textValueStyle?: StyleProp<TextStyle>;
  valueSelectedStyle?: StyleProp<TextStyle>;
  valueUnselectedStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  onValuesSelected: (selectedValues: {
    days: number;
    hours: number;
    minutes: number;
  }) => void;
}; //& (Partial<{ daysValue: { totalValue: number; textValue: string } }>);

const TimePicker = (props: Props) => {
  const {
    onValuesSelected,
    daysValue,
    hoursValue,
    minutesValue,
    dividerStyle,
    textValueStyle,
    valueSelectedStyle,
    valueUnselectedStyle,
    style,
  } = props;
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [roundedOffset, setRoundedOffset] = useState(0);

  console.log(daysValue?.initialValue);

  const ITEM_HEIGHT = 50;

  const scrollAlign = (ref: React.MutableRefObject<ScrollView | null>) => {
    ref.current?.scrollTo({y: roundedOffset, animated: false});
  };

  const handleScroll = (
    event: any,
    setValue: React.Dispatch<React.SetStateAction<number>>,
    r: React.MutableRefObject<ScrollView | null>,
  ) => {
    const {contentOffset, layoutMeasurement} = event.nativeEvent;
    const centerIndex = Math.round(contentOffset.y / ITEM_HEIGHT);
    setValue(centerIndex);

    const selectedValues = {
      days: days,
      hours: hours,
      minutes: minutes,
    };
    onValuesSelected(selectedValues);
    setRoundedOffset(Math.round(centerIndex * ITEM_HEIGHT));
  };

  const scrollToIndex = (
    ref: React.MutableRefObject<ScrollView | null>,
    index: number,
  ) => {
    ref.current?.scrollTo({y: index * ITEM_HEIGHT, animated: true});
  };

  const daysRef = useRef<ScrollView | null>(null);
  const hoursRef = useRef<ScrollView | null>(null);
  const minutesRef = useRef<ScrollView | null>(null);

  const renderItems = (count: number, selectedValue: number, text: string) => {
    const items = [];
    for (let i = 0; i < count; i++) {
      const isItemSelected = i === selectedValue;

      const paddedValue = i.toString().padStart(2, '0');

      const itemText = isItemSelected ? text : '';

      items.push(
        <Animated.Text
          key={i}
          style={[
            styles.item,
            isItemSelected ? valueSelectedStyle : valueUnselectedStyle,
          ]}>
          {paddedValue}
          <Text style={textValueStyle}>{' ' + itemText}</Text>
        </Animated.Text>,
      );
    }
    return items;
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.timerContainer}>
        {daysValue !== undefined && (
          <>
            <TouchableWithoutFeedback
              onPress={() => scrollToIndex(daysRef, days)}>
              <Animated.ScrollView
                ref={daysRef}
                style={[styles.scrollContainer]}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
                scrollEventThrottle={16}
                onMomentumScrollEnd={() => scrollAlign(daysRef)}
                onScroll={event => handleScroll(event, setDays, daysRef)}>
                {renderItems(daysValue?.totalValue, days, daysValue?.textValue)}
              </Animated.ScrollView>
            </TouchableWithoutFeedback>
            <Text style={dividerStyle}>:</Text>
          </>
        )}
        <TouchableWithoutFeedback
          onPress={() => scrollToIndex(hoursRef, hours)}>
          <Animated.ScrollView
            ref={hoursRef}
            style={[styles.scrollContainer]}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
            scrollEventThrottle={16}
            onMomentumScrollEnd={() => scrollAlign(hoursRef)}
            onScroll={event => handleScroll(event, setHours, hoursRef)}>
            {renderItems(hoursValue.totalValue, hours, hoursValue.textValue)}
          </Animated.ScrollView>
        </TouchableWithoutFeedback>
        <Text style={dividerStyle}>:</Text>
        <TouchableWithoutFeedback
          onPress={() => scrollToIndex(minutesRef, minutes)}>
          <Animated.ScrollView
            ref={minutesRef}
            style={[styles.scrollContainer]}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
            scrollEventThrottle={16}
            onMomentumScrollEnd={() => scrollAlign(minutesRef)}
            onScroll={event => handleScroll(event, setMinutes, minutesRef)}>
            {renderItems(
              minutesValue.totalValue,
              minutes,
              minutesValue.textValue,
            )}
          </Animated.ScrollView>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    height: 150,
  },
  contentContainer: {
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 50,
  },
  item: {
    fontSize: 18,
    lineHeight: 50,
  },
  resultText: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default TimePicker;
