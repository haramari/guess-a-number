  import React from 'react';
import { View, Text, StyleSheet, Alert, Image, Button} from 'react-native';

const GameOverScreen = props => {
  //return <View style={styles.screen}>
  return <View style={styles.screen}>
    <Text style={styles.text}>The Game is Over!</Text>
    <Text style={styles.text}>Number of rounds: {props.roundsNumber} </Text>
    <Text style={styles.text}>Number was: {props.userNumber}< /Text>
    <Button title="NEW GAME" onPress={props.onRestart}/>
  </View>
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    fontFamily: 'Amatic',
  },
  text: {
    margin: 5
  }
});

/*
const styles = StyleSheet.crete({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
*/
export default GameOverScreen;