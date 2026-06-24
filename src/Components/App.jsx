import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ParticlesBackground from './ParticlesBackground'
import Header from './Header'
import Contact from './Contact'
// import Resume from './Resume'
import Projects from './Projects'
import AboutMe from './AboutMe'
import '../CSS/App.css'

function App() {

  return (
    <>
      <ParticlesBackground />
      <Router basename="/my-portfolio">
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
    </>
  )
}

export default App
