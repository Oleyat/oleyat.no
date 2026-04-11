import './Home.css'
import { ColorText } from '../components/decoration/ColorText.tsx';

function Home() {

  return (
    <>
      <section className="center relative mt-50 w-full h-96">
        <div className="mx-20">


          <h1 className='md:text-8xl text-4xl  text-center'>velkommen</h1>
          <p className='text-3xl mt-2 text-center text-slate-500/30'><ColorText text={"oleyat.no"} /></p>
        </div>
      </section>

      <section className="w-full absolute bottom-30">
        <div id="social">
          <h2 className='text-xl md:text-2xl text-center'>finn meg her</h2>
          <p className='text-l md:text-2xl text-center text-slate-500/30'>eller ta kontakt gjennom skjema</p>
          <ul className='flex flex-row my-10 gap-20 justify-center'>
            <li>
              <a href="https://github.com/oleyat" target="_blank">
                <svg
                  className="social_icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                <p className='text-slate-500/30'><ColorText text="Github" /></p>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/haydar-oleyat/" target="_blank">
                <svg
                  className="social_icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#linkedin-icon"></use>
                </svg>
                <p className='text-slate-500/30'><ColorText text="LinkedIn" /></p>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Home
