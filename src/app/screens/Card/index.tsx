import React, {useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {maskify} from '../../shared/utils';
import {center, container, input, title} from '../../shared/styles';

const CardScreen = () => {
  const [card, setCard] = useState('');

  return (
    <View style={container}>
      <View style={center}>
        <Image
          style={styles.card}
          source={require('../../../assets/images/credit_card.png')}
        />
        <View style={[center, styles.mask]}>
          <Text style={title}>{maskify(card)}</Text>
        </View>
      </View>

      <View style={styles.inputWrapper}>
        <Text>Ingresa el número de tu tarjeta</Text>

        <TextInput
          keyboardType={'number-pad'}
          maxLength={16}
          style={input}
          onChangeText={setCard}
          value={card}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    resizeMode: 'contain',
    width: 370,
    height: 250,
  },
  mask: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  },
});

export default CardScreen;
