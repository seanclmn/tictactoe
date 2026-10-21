import { useState } from 'react'
import Board from './components/Board.jsx'
import { emptyBoard, findWinner, isDraw } from './game.js'

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
    <main className="flex min-h-svh flex-col items-center justify-center gap-5 bg-white px-4 py-8 text-center font-sans text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <h1 className="text-4xl font-bold tracking-tight">Tic-Tac-Toe</h1>
      <p className="min-h-[1.5em] text-xl font-semibold" aria-live="polite">
        {status}
      </p>
      <Board
        squares={squares}
        winningLine={winner?.line}
        disabled={gameOver}
        onPlay={handlePlay}
      />
      <button
        type="button"
        className="cursor-pointer rounded-full bg-purple-600 px-6 py-2.5 font-semibold text-white hover:bg-purple-500 dark:bg-purple-500 dark:hover:bg-purple-400"
        onClick={reset}
      >
        {gameOver ? 'Play again' : 'Restart'}
      </button>
    </main>
  )
}

export default App
