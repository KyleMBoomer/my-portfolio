import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './Header'
import Contact from './Contact'
import Resume from './Resume'
import Projects from './Projects'
import AboutMe from './AboutMe'
import './App.css'

function App() {

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<AboutMe/>}/>
          <Route path="/projects" element={<Projects/>}/>
          {/* <Route path="/resume" element={<Resume/>}/>  */}
          <Route path="/contact" element={<Contact/>}/>         
        </Routes>
      </main>
    </Router>
  )
}

export default App
