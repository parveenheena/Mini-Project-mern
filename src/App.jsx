import { useState } from 'react'
// import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Accounts } from './Components/Account'
import { Notes } from './Components/Notes'
import { Newnote } from './Components/Newnote'
import { Editnote } from './Components/Editnote'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
    <Route path="/" element={<Accounts/>}/>
    <Route path="/notes" element={<Notes/>}/>
    <Route path="/newnote" element={<Newnote/>}/>
    <Route path="/notes/:id" element={<Editnote/>}/>
    </Routes>
    </>
  )
}

export default App

