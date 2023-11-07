import { useState } from 'react'

import './App.css'
import Relogio from './components/Relogio/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Relogio />
    </>
  )
}

export default App
