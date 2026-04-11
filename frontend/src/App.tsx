import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import Home from './pages/Home.tsx';
import Temp from './pages/Temp.tsx';

function App() {

  return (
    <>
      <BrowserRouter>

        <div className='hidden md:block'>
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Temp />} />
          <Route path="/blog" element={<Temp />} />
          <Route path="/kontakt" element={<Temp />} />
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
