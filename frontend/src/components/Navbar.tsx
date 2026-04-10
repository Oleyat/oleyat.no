import './Navbar.css'


function Navbar() {
  const portfolioLinks = ["portfolio", "blog", "kontakt"];
  return (
    <>
      <nav className="navbar w-full h-16 bg-olive-500/30 ">
            <ul className='flex flex-row items-center justify-center gap-25 h-full text-lg'>
              {portfolioLinks.map((link) => (
                <li>
                  <a href={`/${link}`} className='box-border border-4 p-2'>
                    {link.split("").map((char) => (
                      <span className="hover:uppercase transition duration-300">
                        {char}
                      </span>
                    ))}
                  </a>
                </li>
              ))}
            </ul>
      </nav>
    </>
  )
}

export default Navbar
