import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity  } from 'react-native';

import BoardScreen from './BoardScreen';
import PlayerScoreComponent from '../components/PlayerScore';

const HomeScreen = () => {
  const [ notification, setNotification ] = useState("Player X to start!")
  const [ playerXScore, setPlayerXScore ] = useState(0)
  const [ playerYScore, setPlayerYScore ] = useState(0)

  const setPlayerScore = (player) => {
    if (player == "X") {
      setPlayerXScore(playerXScore + 1)
    } else {
      setPlayerYScore(playerYScore + 1)
    }
  }

  const resetScore = () => {
    if (playerXScore != 0 || playerYScore != 0) {
      setPlayerXScore(0)
      setPlayerYScore(0)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic-Tac-Toe</Text>
      <Text style={styles.move}>{notification}</Text>
      <BoardScreen setNotification={setNotification} setPlayerScore={setPlayerScore} />
      <View style={styles.containerScore}>
        <PlayerScoreComponent player={'X'} score={playerXScore} />
        <PlayerScoreComponent player={'O'} score={playerYScore} />
      </View>
      <TouchableOpacity
        onPress={() => resetScore()}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Reset score</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 50,
        position: 'absolute',
        top: 50,
        color: 'brown'
    },
    move: {
        fontSize: 20,
        position: 'absolute',
        top: 115,
        color: 'brown'
    },
    containerScore: {
      flex: 0,
      flexDirection: 'row',
      position: 'absolute',
      top: 500,
    },
    button: {
      position: 'absolute',
      top: 600,
      width: 200,
      height: 50,
      backgroundColor: 'brown',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 20,
    }
});

export default HomeScreen;