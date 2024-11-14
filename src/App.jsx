import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Slidebar1 from './Projects/Slidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Slidebar1/>
    </div>
  )
}

export default App
