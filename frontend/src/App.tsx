import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import Home from './pages/Home.tsx';

function App() {

  return (
    <>
      <BrowserRouter>

        <div className='hidden md:block'>
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
