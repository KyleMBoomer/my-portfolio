import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/resume" element={<Resume/>}/> 
          <Route path="/contact" element={<Contact/>}/>         
        </Routes>
      </main>
    </Router>
  )
}

export default App
