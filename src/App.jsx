import { useState } from 'react'
import Board from './components/Board.jsx'
import { emptyBoard, findWinner, isDraw } from './game.js'
import './App.css'

function App() {
  const [squares, setSquares] = useState(emptyBoard)
  const [xIsNext, setXIsNext] = useState(true)

  const winner = findWinner(squares)
  const draw = isDraw(squares)
  const gameOver = Boolean(winner) || draw

  function handlePlay(index) {
    if (gameOver || squares[index]) return
    const next = squares.slice()
    next[index] = xIsNext ? 'X' : 'O'
    setSquares(next)
    setXIsNext(!xIsNext)
  }

  function reset() {
    setSquares(emptyBoard())
    setXIsNext(true)
  }

  let status
  if (winner) status = `Player ${winner.player} wins!`
  else if (draw) status = "It's a draw."
  else status = `Player ${xIsNext ? 'X' : 'O'}'s turn`

  return (
    <main className="game">
      <h1>Tic-Tac-Toe</h1>
      <p className="status" aria-live="polite">
        {status}
      </p>
      <Board
        squares={squares}
        winningLine={winner?.line}
        disabled={gameOver}
        onPlay={handlePlay}
      />
      <button type="button" className="reset" onClick={reset}>
        {gameOver ? 'Play again' : 'Restart'}
      </button>
    </main>
  )
}

export default App
