import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [ notification, setNotification ] = react.useState("Player X to start!")
  const [ refresh, setRefresh ] = react.useState(false)
  const [ currentPlayer, setCurrentPlayer ] = react.useState("X")
  const [ board, setBoard ] = react.useState(
    [
      " ", " ", " ",
      " ", " ", " ",
      " ", " ", " "
    ]
  )

  const pressField = (index) => {
    let newBoard = board
    if (newBoard[index] === " ") {
      if (currentPlayer == "X") {
        newBoard[index] = currentPlayer
        setCurrentPlayer("O")
        setNotification("Player O to start!")
      } else {
        newBoard[index] = currentPlayer
        setCurrentPlayer("X")
        setNotification("Player X to start!")
      }
      setBoard(newBoard)
      setRefresh(!refresh)
      checkIfPlayerWon()
    }
  }

  const checkIfPlayerWon = () => {
    if (board[0] == board[1] && board[1] == board[2] && board[0] != " ") {
      playWon(board[0])
    } else if (board[3] == board[4] && board[4] == board[5] && board[3] != " ") {
      playWon(board[3])
    } else if (board[6] == board[7] && board[7] == board[8] && board[6] != " ") {
      playWon(board[6])
    } else if (board[0] == board[4] && board[4] == board[8] && board[0] != " ") {
      playWon(board[0])
    } else if (board[2] == board[4] && board[4] == board[6] && board[2] != " ") {
      playWon(board[2])
    } else if (board[0] == board[3] && board[3] == board[6] && board[0] != " ") {
      playWon(board[0])
    } else if (board[1] == board[4] && board[4] == board[7] && board[1] != " ") {
      playWon(board[1])
    } else if (board[2] == board[5] && board[5] == board[8] && board[2] != " ") {
      playWon(board[2])
    }
  }

  const playWon = () => {

  }

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
          <TouchableOpacity style={styles.square} onPress={() => pressField(index)}>
            <Text>{item}</Text>
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
