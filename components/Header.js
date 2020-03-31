import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import Colors from '../constants/colors.js';

const Header = props => {

  return (
    <View style={styles.header}>
      <Image source={require('../assets/title.png')} style={styles.backgroundImage} />
    </View>
  );

};

const styles = StyleSheet.create({

  header: {
    width: '100',
    height:  150,
    paddingTop: 36,
    backgroundColor: Colors.sakura,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.7
  },
  backgroundImage: {
    height: 100,
    width: 180,
    marginBottom: 30
  }
});

export default Header;

