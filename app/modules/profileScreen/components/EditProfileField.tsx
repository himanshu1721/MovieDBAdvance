//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Colors } from '../../../themes';

// create a component
const EditProfile = ({
  currentCount = 10,
  value,
  title,
  onEditField,
  maxCharactersAllowed = 180,
}) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{ color: '#eee', fontSize: 19, fontWeight: '600' }}>
          {title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 2,
            borderRadius: 10,
            paddingHorizontal: 10,
            backgroundColor: Colors.limeGreen,
          }}>
          <Text style={{ fontWeight: '500', fontSize: 17 }}>
            {currentCount}
          </Text>
          <Text style={{ fontWeight: '500', fontSize: 17 }}>/</Text>
          <Text style={{ fontWeight: '500', fontSize: 17 }}>
            {maxCharactersAllowed}
          </Text>
        </View>
      </View>
      <View style={{ height: 10 }}></View>
      <TextInput
        multiline
        autoCapitalize="none"
        maxLength={maxCharactersAllowed}
        value={value}
        onChangeText={onEditField}
        placeholder="enter you name"
        style={{
          paddingVertical: 0,
          width: '100%',
          fontSize: 18,
          color: 'white',
          borderBottomWidth: 1,
          borderBottomColor: '#aaa',
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default EditProfile;
