import { ColorText } from './decoration/ColorText';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar w-full h-16 bg-stone-800/30 ">
            <ul className='flex flex-row items-center justify-center gap-25 h-full text-xl'>
                <li>
                  <Link to="/#" className='p-2'>
                    <span className='text-yellow-400'>//</span><ColorText text="portfolio"/>
                  </Link>
                </li>
                <li>
                  <Link to="/#" className='p-2'>
                    <span className='text-pink-400'>//</span><ColorText text="blog" />
                  </Link>
                </li>
                <li>
                  <Link to="/#" className='p-2'>
                    <span className='text-sky-400'>//</span><ColorText text="kontakt" />
                  </Link>
                </li>
            </ul>
      </nav>
    </>
  )
}

export default Navbar
