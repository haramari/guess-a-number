import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
  return (
  <View style={{...styles.card, ...props.style}}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.26,
    shadowRadius: 10,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 30,
  }
});

export default Card;