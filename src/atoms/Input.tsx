import React from 'react';
import {TextInput, View} from 'react-native';

export const Input = () => {
  return (
    <TextInput
      placeholder="Text"
      style={{
        alignSelf: 'center',
        justifyContent: 'center',
        marginVertical: 15,
      }}></TextInput>
  );
};
