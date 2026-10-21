const MARK_COLORS = {
  X: 'text-blue-600 dark:text-blue-400',
  O: 'text-rose-600 dark:text-rose-400',
}

function Square({ index, value, isWin, disabled, onClick }) {
  return (
    <button
      type="button"
      className={[
        'rounded-xl border-2 text-5xl leading-none font-bold transition-colors sm:text-6xl md:text-7xl',
        'enabled:cursor-pointer enabled:hover:border-purple-400 enabled:hover:bg-purple-500/10',
        isWin
          ? 'border-purple-500 bg-purple-500/15'
          : 'border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900',
        value ? MARK_COLORS[value] : '',
      ].join(' ')}
      onClick={onClick}
      disabled={disabled}
      aria-label={`Square ${index + 1}${value ? `, ${value}` : ', empty'}`}
    >
      {value}
    </button>
  )
}

export default function Board({ squares, winningLine, disabled, onPlay }) {
  return (
    <div
      className="grid size-72 grid-cols-3 grid-rows-3 gap-2 sm:size-80 md:size-96"
      role="group"
      aria-label="Tic-tac-toe board"
    >
      {squares.map((value, i) => (
        <Square
          key={i}
          index={i}
          value={value}
          isWin={winningLine?.includes(i)}
          disabled={disabled || value !== null}
          onClick={() => onPlay(i)}
        />
      ))}
    </div>
  )
}
