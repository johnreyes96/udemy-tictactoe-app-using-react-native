import React from 'react';
import { StyleSheet, Image } from 'react-native';

const BoardComponent = () => {
  return (
    <Image
        source={require('../../assets/board.png')}
        style={styles.image}
    />
  );
};

const styles = StyleSheet.create({
    image: {
      width: 300,
      height: 300,
      position: 'absolute'
  }
});

export default BoardComponent;
