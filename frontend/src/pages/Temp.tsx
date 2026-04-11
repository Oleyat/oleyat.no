import { ColorText } from '../components/decoration/ColorText.tsx';
import { Link } from 'react-router-dom';

function Temp() {

  return (
    <>
      <section className="center relative mt-50 w-full h-96">
        <div className="mx-20">
            <h1 className='md:text-8xl text-4xl  text-center'>whoops -!</h1>
            <p className='text-3xl mt-2 text-center text-slate-500/30'><ColorText text={"denne siden kommer snart"} />
                <Link to="/" className='text-slate-500/75'>
                    <ColorText text=" trykk her for å gå tilbake."/>
                </Link>
            </p>

          
        </div>
      </section>
    </>
  )
}

export default Temp
