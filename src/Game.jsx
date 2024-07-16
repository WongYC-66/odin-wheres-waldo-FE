import { useState } from 'react'
import game01Img from '/game01.jpg?url'

function Game({ setShowPage }) {

  return (
    <div className='d-flex flex-column'>
      {/* fixed top bar */}
      <div className='fixed-top d-flex bg-secondary'>
        hi
      </div>

      {/* game image */}
      <div className='mt-5'>
        <img src={game01Img} alt="" className='w-100'/>
      </div>

    </div>
  )
}

export default Game
