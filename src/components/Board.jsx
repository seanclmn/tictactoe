const MARK_COLORS = {
  X: 'text-blue-600 dark:text-blue-400',
  O: 'text-rose-600 dark:text-rose-400',
}

export default function Board({ squares, winningLine, disabled, onPlay }) {
  return (
    <div
      className="grid aspect-square w-[min(90vw,360px)] grid-cols-3 gap-2"
      role="group"
      aria-label="Tic-tac-toe board"
    >
      {squares.map((value, i) => {
        const isWin = winningLine?.includes(i)
        return (
          <button
            key={i}
            type="button"
            className={[
              'rounded-xl border-2 text-[clamp(2.5rem,12vw,4rem)] leading-none font-bold transition-colors',
              'enabled:cursor-pointer enabled:hover:border-purple-400 enabled:hover:bg-purple-500/10',
              isWin
                ? 'border-purple-500 bg-purple-500/15'
                : 'border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900',
              value ? MARK_COLORS[value] : '',
            ].join(' ')}
            onClick={() => onPlay(i)}
            disabled={disabled || value !== null}
            aria-label={`Square ${i + 1}${value ? `, ${value}` : ', empty'}`}
          >
            {value}
          </button>
        )
      })}
    </div>
  )
}
