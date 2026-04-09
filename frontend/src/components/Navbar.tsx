import './Navbar.css'

function Navbar() {

  return (
    <>
      <nav className="navbar w-full h-16 bg-olive-500/30 flex items-center justify-center">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
      </nav>
    </>
  )
}

export default Navbar
