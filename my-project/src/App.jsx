import { useState } from 'react'
import LeaderBoards from './pages/LeaderBoards'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <LeaderBoards />
   </>
  )
}

export default App
