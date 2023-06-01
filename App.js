import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import BoardScreen from './src/screens/BoardScreen';

const App = () => {
  const [ notification, setNotification ] = react.useState("Player X to start!")

  return (
    <View style={styles.container}>
      <Image
          source={require('./assets/background.jpg')}
          style={styles.backgroundImage}
        />
      <StatusBar style="auto" />
      <Text style={styles.txt1}>TicTacToe</Text>
      <Text style={styles.txt2}>{notification}</Text>
      <BoardScreen setNotification={setNotification} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  },
  backgroundImage: {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: '100%'
  }
});

export default App;
