import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {center, container, input, title} from '../../shared/styles';
import {calculate} from '../../shared/utils';

const PolishNotationScreen = () => {
  const [value, setValue] = useState<string>('');

  return (
    <View style={container}>
      <View style={center}>
        {!!value && (
          <Text style={[title, {color: 'black'}]}>{calculate(value)}</Text>
        )}

        <TextInput
          maxLength={10}
          style={input}
          onChangeText={setValue}
          value={value}
        />
      </View>
    </View>
  );
};

export default PolishNotationScreen;
