import React, {useState} from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import {maskify} from '../../shared/utils';

const CardScreen = () => {
  const [card, setCard] = useState('');

  return (
    <View style={{flex: 1, marginHorizontal: 20}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{
            resizeMode: 'contain',
            width: 370,
            height: 250,
          }}
          source={require('../../../assets/images/credit_card.png')}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            top: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 30,
            }}>
            {maskify(card)}
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <Text>Ingresa el número de tu tarjeta</Text>

        <TextInput
          keyboardType={'number-pad'}
          maxLength={16}
          style={{
            height: 40,
            width: '100%',
            margin: 12,
            borderWidth: 1,
            padding: 10,
          }}
          onChangeText={setCard}
          value={card}
        />
      </View>
    </View>
  );
};

export default CardScreen;
