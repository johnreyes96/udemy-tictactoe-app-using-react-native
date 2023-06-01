import React, { useState } from 'react';
import { StyleSheet, View, Text  } from 'react-native';

import BoardScreen from './BoardScreen';

const HomeScreen = () => {
  const [ notification, setNotification ] = useState("Player X to start!")

  return (
    <View style={styles.container}>
      <Text style={styles.txt1}>TicTacToe</Text>
      <Text style={styles.txt2}>{notification}</Text>
      <BoardScreen setNotification={setNotification} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt1: {
        fontSize: 50,
        position: 'absolute',
        top: 60,
        color: 'brown'
    },
    txt2: {
        fontSize: 20,
        position: 'absolute',
        top: 130,
        color: 'brown'
    }
});

export default HomeScreen;