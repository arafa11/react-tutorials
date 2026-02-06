import React from 'react'

export default function Square({
  value,
  onSquareClick,
}: {
  value: string | null
  onSquareClick: () => void
}) {
  return (
    <button
      className="square"
      onClick={onSquareClick}
      style={{ width: 50, height: 50 }}
    >
      {value}
    </button>
  )
}
