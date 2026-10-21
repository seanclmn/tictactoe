export default function Board({ squares, winningLine, disabled, onPlay }) {
  return (
    <div className="board" role="grid" aria-label="Tic-tac-toe board">
      {squares.map((value, i) => (
        <button
          key={i}
          type="button"
          className={`square${winningLine?.includes(i) ? ' win' : ''}${value ? ` ${value.toLowerCase()}` : ''}`}
          onClick={() => onPlay(i)}
          disabled={disabled || value !== null}
          aria-label={`Square ${i + 1}${value ? `, ${value}` : ', empty'}`}
        >
          {value}
        </button>
      ))}
    </div>
  )
}
