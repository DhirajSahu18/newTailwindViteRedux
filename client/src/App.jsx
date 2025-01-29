import { useState } from 'react'
import './App.css'
import Demo from './features/demo/Demo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className="text-5xl text-red-300">Hello</h1>
      <Demo/>
    </div>
  )
}

export default App
