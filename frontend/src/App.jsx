import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Research from './pages/Research'
import Solution from './pages/Solution'
import Milestones from './pages/Milestones'
import Documents from './pages/Documents'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <main>
        <Home />
        <Research />
        <Solution />
        <Milestones />
        <Documents />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
