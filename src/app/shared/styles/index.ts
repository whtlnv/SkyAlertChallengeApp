import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export const center: StyleProp<ViewStyle> = {
  justifyContent: 'center',
  alignItems: 'center',
};

export const title: StyleProp<TextStyle> = {
  color: 'white',
  fontSize: 30,
};

export const input: StyleProp<TextStyle> = {
  height: 40,
  width: '100%',
  margin: 12,
  borderWidth: 1,
  padding: 10,
};

export const container: StyleProp<ViewStyle> = {
  flex: 1,
  marginHorizontal: 20,
};
