import home01Pic from '/home01.png?url'

function Home({setShowPage}) {

  const playButtonClick = () => {
    setShowPage('game')
  }
  const scoreButtonClick = () => {
    setShowPage('score')
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
      <img src={home01Pic} alt="welcomeImage" width="300px"/>
      <h1> WHERE IS WALDO? </h1>
      <h5>Try to find waldo, wizard and odlaw as soon as possible</h5>

      <button type="button" className="btn btn-danger" onClick={playButtonClick}>Play Now</button>

      <hr />
      <button type="button" className="btn btn-success" onClick={scoreButtonClick}> Scoreboard </button>

    </div>
  )
}

export default Home
