import { useState } from 'react'
import Home from './Home.jsx'
import Game from './Game.jsx'
// import './App.css'

function App() {
  const [showPage, setShowPage] = useState("home")

  return (
    <div className='d-flex flex-column vh-100 p-2 bg-danger-subtle'>
      <main className='flex-fill m-2'>
        {showPage == 'home' && <Home setShowPage={setShowPage} />}
        {showPage == 'game' && <Game setShowPage={setShowPage} />}
      </main>

      <footer className='text-center p-2 m-2'>
          Designed and created by YcWong @2024
      </footer>

    </div>
  )
}

export default App
