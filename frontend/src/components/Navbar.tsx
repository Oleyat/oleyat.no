import './Navbar.css'
import { ColorText } from './decoration/ColorText';

function Navbar() {
  return (
    <>
      <nav className="navbar w-full h-16 bg-stone-800/30 ">
            <ul className='flex flex-row items-center justify-center gap-25 h-full text-xl'>
                <li>
                  <a href="/#" className='p-2'>
                    <span className='text-yellow-400'>//</span><ColorText text="portfolio"/>
                  </a>
                </li>
                <li>
                  <a href="/#" className='p-2'>
                    <span className='text-pink-400'>//</span><ColorText text="blog" />
                  </a>
                </li>
                <li>
                  <a href="/#" className='p-2'>
                    <span className='text-sky-400'>//</span><ColorText text="kontakt" />
                  </a>
                </li>
            </ul>
      </nav>
    </>
  )
}

export default Navbar
