import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='game-container'>
        <div className='about-container'>
          <p className='about'>Sobre</p>
        </div>
      </div>
    </div>
  )
}

export default App
