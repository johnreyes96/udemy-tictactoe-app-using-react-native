import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [ notification, setNotification ] = react.useState("Player X to start!")
  const [ refresh, setRefresh ] = react.useState(false)
  const [ board, setBoard ] = react.useState(
    [
      " ", " ", " ",
      " ", " ", " ",
      " ", " ", " "
    ]
  )

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.txt1}>TicTacToe</Text>
      <Text style={styles.txt2}>{notification}</Text>
      <FlatList
        style={styles.list}
        data={board}
        numColumns={3}
        refreshing={true}
        extraData={refresh}
        renderItem={({item, index}) =>
          <TouchableOpacity style={styles.square}>
            <Text>{index}</Text>
          </TouchableOpacity>
        }
      />
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
    fontSize: 50
  },
  txt2: {
    fontSize: 20
  },
  list: {
    width: 300,
    height: 400
  },
  square: {
    height: 60,
    width: 30,
    backgroundColor: 'red',
    margin: 10
  }
});
