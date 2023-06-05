import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import BoardComponent from '../components/Board';
import CellComponent from '../components/Cell';

const delay = ms => new Promise(res => setTimeout(res, ms));

const BoardScreen = ({ setNotification }) => {
    const [ refresh, setRefresh ] = useState(false)
    const [ currentPlayer, setCurrentPlayer ] = useState("X")
    const [ lock, setLock ] = useState(false)
    const [ moves, setMoves ] = useState(0)
    const [ board, setBoard ] = useState(
      [
        " ", " ", " ",
        " ", " ", " ",
        " ", " ", " "
      ]
    )

    const pressCell = (index) => {
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
  
        if (moves > 3 && checkIfPlayerWon()) return
  
        setMoves(moves + 1)
        validClearBoard(board[index])
      }
    }
  
    const checkIfPlayerWon = () => {
      let playerWon = false
      if (board[0] == board[1] && board[1] == board[2] && board[0] != " ") {
        playerWon = true
        playWon(board[0])
      } else if (board[3] == board[4] && board[4] == board[5] && board[3] != " ") {
        playerWon = true
        playWon(board[3])
      } else if (board[6] == board[7] && board[7] == board[8] && board[6] != " ") {
        playerWon = true
        playWon(board[6])
      } else if (board[0] == board[4] && board[4] == board[8] && board[0] != " ") {
        playerWon = true
        playWon(board[0])
      } else if (board[2] == board[4] && board[4] == board[6] && board[2] != " ") {
        playerWon = true
        playWon(board[2])
      } else if (board[0] == board[3] && board[3] == board[6] && board[0] != " ") {
        playerWon = true
        playWon(board[0])
      } else if (board[1] == board[4] && board[4] == board[7] && board[1] != " ") {
        playerWon = true
        playWon(board[1])
      } else if (board[2] == board[5] && board[5] == board[8] && board[2] != " ") {
        playerWon = true
        playWon(board[2])
      }
      return playerWon
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
      setMoves(0)
  
      if (player == "X") setNotification("Player O to move!")
      else setNotification("Player X to move!")
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
    <View style={styles.flatlistContainer}>
        <BoardComponent />
        <FlatList
          style={styles.list}
          data={board}
          numColumns={3}
          refreshing={true}
          extraData={refresh}
          renderItem={({item, index}) =>
            <CellComponent pressCell={pressCell} move={item} index={index} />
          }
        />
    </View>
  );
};

const styles = StyleSheet.create({
    flatlistContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
    width: '100%'
    },
    list: {
        width: 300,
        height: 300
    }
});

export default BoardScreen;