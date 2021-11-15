import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {numberToOrdinal} from '../../shared/utils';
import {center, container, input, title} from '../../shared/styles';

const OrdinalScreen = () => {
  const [value, setValue] = useState<string>('');

  return (
    <View style={container}>
      <View style={center}>
        {!!value && (
          <Text style={[title, {color: 'black'}]}>
            {numberToOrdinal(parseInt(value, 10))}
          </Text>
        )}

        <TextInput
          keyboardType={'number-pad'}
          maxLength={10}
          style={input}
          onChangeText={setValue}
          value={value}
        />
      </View>
    </View>
  );
};

export default OrdinalScreen;
