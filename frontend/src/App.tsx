import './App.css'

function App() {

  return (
    <>
      <section className="center relative mt-50 w-full h-96">
        <div className="mx-20">
          <h1 className='text-8xl text-center'>velkommen</h1>
          <p className='text-3xl mt-2 text-center text-slate-500/30'>oleyat.no</p>
        </div>
      </section>

      <section className="w-full absolute bottom-30">
        <div id="social">
          <h2 className='text-2xl text-center'>finn meg her</h2>
          <p className='text-2xl text-center text-slate-500/30'>eller ta kontakt gjennom skjema</p>
          <ul className='flex flex-row my-10 gap-20 justify-center'>
            <li>
              <a href="https://github.com/oleyat" target="_blank">
                <svg
                  className="button-icon fill-olive-500 hover:fill-olive-600 w-12 h-12"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                <p className='text-slate-500/30'>Github</p>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/haydar-oleyat/" target="_blank">
                <svg
                  className="button-icon fill-olive-500 hover:fill-olive-600 w-12 h-12 "
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#linkedin-icon"></use>
                </svg>
                <p className='text-slate-500/30'>LinkedIn</p>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default App
