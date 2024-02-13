import React from 'react'
import './Components/style.css'
import { Main } from './Components/Main'
import { Routes, Route } from 'react-router-dom'
import { Marvel } from './Components/Marvel';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/:id' element={<Marvel />} />

      </Routes>
      
    </div>
  )
}

export default App
