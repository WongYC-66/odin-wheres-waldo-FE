// import chr01Img from '/chr01.png?url'
// import chr02Img from '/chr02.png?url'
// import chr03Img from '/chr03.png?url'
// import chr04Img from '/chr04.png?url'

function Selection(props) {

  let { mouseX, mouseY, imgWidth, imgHeight, mousePageX, mousePageY} = props.selectionProp

  let characters = props.characters
  let setCharacters = props.setCharacters
  let setShowSelection = props.setShowSelection
  let setFoundCircles = props.setFoundCircles

  // console.log(props.selectionProp)

  const submit = (e, val) => {
    // call BackEnd to check
    let xCoord = mouseX / imgWidth
    let yCoord = mouseY / imgHeight

    let solution = {
      1: [0.488, 0.713],
      2: [0.853, 0.670],
      3: [0.274, 0.600],
      4: [0.135, 0.677],
    }

    let tolerance = 0.03

    let res = false

    let [solX, solY] = solution[val]

    if (Math.abs(xCoord - solX) <= tolerance && Math.abs(yCoord - solY) <= tolerance)
      res = true

    if (res) {
      // alert('You found it', val)
      setCharacters(characters.filter(v => v != val))
      setFoundCircles(prev => [...prev, [val, xCoord, yCoord]])
    }

    setShowSelection(false)

  }


  return (
    <div className='d-flex flex-column position-fixed bg-dark p-1 rounded' style={{ left: mousePageX, top: mousePageY }}>
      {characters.map(val =>
        <button key={val} type="button" className="btn btn-secondary m-0 p-0 py-1" onClick={(e) => submit(e, val)}>
          <img src={`/odin-wheres-waldo-FE/chr0${val}.png`} alt="" className="w-75 rounded" />
        </button>
      )}
    </div>
  )
}

export default Selection
