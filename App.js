import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import BoardScreen from './src/screens/BoardScreen';
import BackgroundComponent from './src/components/Background';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BackgroundComponent />
      <BoardScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
