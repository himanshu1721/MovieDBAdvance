import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const EmptyFavorite = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>No favorites Added!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyles: {
    color: 'white',
    fontWeight: '600',
    fontSize: 22,
  },
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EmptyFavorite;
