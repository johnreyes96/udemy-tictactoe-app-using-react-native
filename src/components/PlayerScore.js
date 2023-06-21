import React from 'react';
import { View, StyleSheet, Text  } from 'react-native';

const PlayerScoreComponent = ({player, score}) => {
  return (
    <View style={styles.column}>
        <Text style={styles.player}>Player {player}</Text>
        <Text style={styles.score}>{score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    column: {
        paddingHorizontal: 30
    },
    player: {
        fontSize: 20,
        color: 'brown'
    },
    score: {
        fontSize: 50,
        color: 'brown',
        textAlign: 'center'
    }
});

export default PlayerScoreComponent;
