import React from 'react';
import { StyleSheet, TouchableOpacity, Text  } from 'react-native';

const CellComponent = ({pressCell, move, index}) => {
  return (
    <TouchableOpacity style={styles.square} onPress={() => pressCell(index)}>
        <Text style={styles.txtMove}>{move}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    txtMove: {
        fontSize: 60,
        color: 'brown'
    },
    square: {
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CellComponent;
