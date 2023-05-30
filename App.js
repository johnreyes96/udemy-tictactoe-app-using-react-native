import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const delay = ms => new Promise(res => setTimeout(res, ms));

export default function App() {
  const [ notification, setNotification ] = react.useState("Player X to start!")
  const [ refresh, setRefresh ] = react.useState(false)
  const [ currentPlayer, setCurrentPlayer ] = react.useState("X")
  const [ lock, setLock ] = react.useState(false)
  const [ board, setBoard ] = react.useState(
    [
      " ", " ", " ",
      " ", " ", " ",
      " ", " ", " "
    ]
  )

  const pressField = (index) => {
    let newBoard = board
    if (newBoard[index] === " " && !lock) {
      if (currentPlayer == "X") {
        newBoard[index] = currentPlayer
        setCurrentPlayer("O")
        setNotification("Player O to move!")
      } else {
        newBoard[index] = currentPlayer
        setCurrentPlayer("X")
        setNotification("Player X to move!")
      }
      setBoard(newBoard)
      setRefresh(!refresh)
      checkIfPlayerWon()
      validClearBoard(board[index])
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

  const playWon = async(player) => {
    setNotification("Player " + player + " won!")
    setLock(true)
    await delay(2000)
    resetGame(player)
  }

  const validClearBoard = (player) => {
    for (const cell of board) {
      if (cell == " ") return
    }

    gameOver(player)
  }

  const gameOver = async(player) => {
    setNotification("Game over!")
    setLock(true)
    await delay(2000)

    resetGame(player)
  }

  const resetGame = (player) => {
    clearBoard()
    setLock(false)

    if (player == "X") {
      setNotification("Player O to move!")
    } else {
      setNotification("Player X to move!")
    }
  }

  const clearBoard = () => {
    setBoard(
      [
        " ", " ", " ",
        " ", " ", " ",
        " ", " ", " "
      ]
    )
  }

  return (
    <View style={styles.container}>
      <Image
          source={require('./assets/background.jpg')}
          style={styles.backgroundImage}
        />
      <StatusBar style="auto" />
      <Text style={styles.txt1}>TicTacToe</Text>
      <Text style={styles.txt2}>{notification}</Text>
      <View style={styles.flatlistContainer}>
        <Image
          source={require('./assets/bg.png')}
          style={styles.image}
        />
        <FlatList
          style={styles.list}
          data={board}
          numColumns={3}
          refreshing={true}
          extraData={refresh}
          renderItem={({item, index}) =>
            <TouchableOpacity style={styles.square} onPress={() => pressField(index)}>
              <Text style={styles.txtXO}>{item}</Text>
            </TouchableOpacity>
          }
        />
      </View>
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
  flatlistContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: '100%'
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
  txtXO: {
    fontSize: 60,
    color: 'brown'
  },
  list: {
    width: 300,
    height: 300
  },
  square: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 300,
    height: 300,
    position: 'absolute'
  },
  backgroundImage: {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: '100%'
  }
});
