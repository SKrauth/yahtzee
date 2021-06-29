import React from 'react'

const EndGame = ({handleClick, score}) => {

  return (<>
    <h2>Game Over</h2>
    <h3>Score: {score}</h3>
    <button onClick={handleClick} className="btn">New Game</button>
    </>
  )
}

export default EndGame
