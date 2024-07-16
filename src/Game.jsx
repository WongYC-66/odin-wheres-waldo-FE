import { useEffect, useState } from 'react'

import Selection from './Selection.jsx'

import game01Img from '/game01.jpg?url'
import chr01Img from '/chr01.png?url'
import chr02Img from '/chr02.png?url'
import chr03Img from '/chr03.png?url'
import chr04Img from '/chr04.png?url'

function Game({ setShowPage }) {

  const [characters, setCharacters] = useState([1, 2, 3, 4])
  const [showSelection, setShowSelection] = useState(false)
  const [selectionProp, setSelectionProp] = useState({
    mouseX: 0,
    mouseY: 0,
    imgWidth: 0,
    imgHeight: 0,
  })

  const mouseClick = (e) => {
    let img = document.querySelector("#gameImg")
    setShowSelection(!showSelection)
    setSelectionProp({
      mouseX: e.nativeEvent.offsetX,
      mouseY: e.nativeEvent.offsetY,
      imgWidth: img.clientWidth,
      imgHeight: img.clientHeight,
    })
  }

  // console.log(selectionProp)

  return (
    <div className='d-flex flex-column'>
      {/* fixed top bar */}
      <div className='fixed-top d-flex bg-secondary justify-content-center align-items-center' style={{ maxHeight: "103px" }} >
        <h2 className='text-light m-2'>Find me</h2>
        <img src={chr01Img} className='m-2' />
        <img src={chr02Img} className='m-2' />
        <img src={chr03Img} className='m-2' />
        <img src={chr04Img} className='m-2' />
      </div>

      {/* game image */}
      <div className='' style={{ marginTop: "103px" }}>
        <img id="gameImg" src={game01Img} alt="" className='w-100' onClick={mouseClick} />
      </div>

      {/* selection box */}
      {showSelection && <Selection selectionProp={selectionProp}/>}

    </div >
  )
}

export default Game
