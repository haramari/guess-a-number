 import React, { useState } from 'react';
import { 
  View,
  Text, 
  StyleSheet, 
  TextInput, 
  Button, 
  Image, 
  TouchableWithoutFeedback, 
  Keyboard,
  Alert } 
from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
      setEnteredValue(inputText.replace(/[^0-9]/g,''));
    }; 

    const resetInputHandler = () => {
      setEnteredValue('');
      setConfirmed(false);
      Keyboard.dismiss();
    };

    let confirmedOutPut;

    if (confirmed) {
      confirmedOutPut = 
      <Card style={styles.summaryContainer}>
        <Text>You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title="START GAME" onPress={() => props.onStartGame(selectedNumber)} />
      </Card>
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
          Alert.alert('Invalied number!', 'Number has to be between 1 to 99.', [{text: 'Okay',              style: 'destructive', onPress: resetInputHandler}]
          );
          return;
        }
      setConfirmed(true);
      setEnteredValue('');
      setSelectedNumber(parseInt(enteredValue));
    };

  return (
    <TouchableWithoutFeedback 
      onPress={() => {
      Keyboard.dismiss();
    }}>  
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Text>Select a Number.</Text>
      <Card style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          blurOnSubmit 
          autoCapitalize='none'
          autoCorrect={false} 
          keyboardType="numeric" 
          maxLength={2} 
          onChangeText={numberInputHandler}
          value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Reset" onPress={resetInputHandler} color={Colors.accent} />
            </View>
            <View style={styles.button}>
              <Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary} />
            </View>
          </View>
      </Card>
      {confirmedOutPut}
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    fontFamily: 'Amatic',
  },
  inputContainer: {
    width: '80%',
    maxWidth: '80%',
    alignItems: 'center',
    margin: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  title: {
    fontsize: 50,
    marginVertical: 10,
    fontFamily: 'FFF',
  },
  button: {
    width: 100,   
  },
  textInput: { 
    padding: 10,
    marginVertical: 10
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center'
  }
});

export default StartGameScreen;
