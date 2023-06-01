import React from 'react';
import { StyleSheet, Image } from 'react-native';

const BackgroundComponent = () => {
  return (
    <Image
        source={require('../../assets/background.jpg')}
        style={styles.backgroundImage}
    />
  );
};

const styles = StyleSheet.create({
    backgroundImage: {
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        height: '100%'
      }
});

export default BackgroundComponent;
