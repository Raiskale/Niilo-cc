import './App.css'
import Contact from './components/Contact.jsx'
import Cursor from './components/Cursor.jsx'
import Front from './components/Front.jsx'
import Kolmas from './components/Kolmas.jsx'
import Navbar from './components/Navbar.jsx'
import Second from './components/Second.jsx'

function App() {
  return (
    <div id="home" className="min-h-screen bg-[#05070b] text-white">
      <Cursor />
      <Navbar />
      <main>
        <Front />
        <Second />
        <Kolmas />
        <Contact />
      </main>
    </div>
  )
}

export default App
