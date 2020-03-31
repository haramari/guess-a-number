import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, Touchable, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import Expo, { Font, Asset, AppLoading } from 'expo';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'FFF' : require('./assets/fonts/FFF_Tusj.ttf'),
    'Amatic' : require('./assets/fonts/AmaticSC-Regular.ttf'), 
  });
};

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
    const [userNumber, setUserNumber] = useState();
    const [guessRounds, setGuessRounds] = useState(0);
    const [dataLoaded, setDataLoaded] = useState(false);

    if (!dataLoaded) {
      return (
        <AppLoading 
        startAsync={fetchFonts} 
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)} 
        />
      );
    }

    const configureNuewGameHandler = () => {
      setGuessRounds(0);
      setUserNumber(null);
    };

    const startGameHandler = (selectedNumber) => {
      setUserNumber(selectedNumber);
    };

    const gameOverHandler = numOfRounds => {
      setGuessRounds(numOfRounds);
    };

    let content = <StartGameScreen onStartGame={startGameHandler} />;

    if (userNumber && guessRounds <= 0 ) {
      content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>;
    }else if (guessRounds > 0){
        content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNuewGameHandler}/>;
    }

    return (
      <ImageBackground source={require('./assets/sakura.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Header title="Guess a Number"/>
        {content}
        <Card>
        </Card>
      </View>
      </ImageBackground>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8
  },
  backgroundImage: {
    flex: 1
  }
});










