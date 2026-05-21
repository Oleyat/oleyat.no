import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import Home from './pages/Home.tsx';
import Temp from './pages/Temp.tsx';
import Portfolio from './pages/Portfolio.tsx';
import Article from './pages/templates/Article.tsx';
import Blog from './pages/Blog.tsx';
import Edit from './pages/templates/Edit.tsx';
import Login from './pages/Login.tsx';

function App() {

  return (
    <>
      <BrowserRouter>

        <div className='hidden md:block'>
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/kontakt" element={<Temp />} />
          <Route path="/blog/article/:slug" element={<Article />} />
          <Route path="/blog/edit/:slug" element={<Edit />} />
          <Route path="/login" element={<Login />} />
	        <Route path="*" element={<Temp />} />
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
