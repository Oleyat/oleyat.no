import { ColorText } from '../../components/decoration/ColorText.tsx';

function Article() {

  return (
    <>
      <section className="center relative mt-25 w-full h-96">
        <div className="mx-20">
            <h1 className='md:text-8xl text-4xl  text-left'>portfolio</h1>
            <p className='text-3xl mt-2 text-left text-slate-500/30'><ColorText text={"trykk på et prosjekt for å se detaljer"} />
            </p>

          
        </div>
      </section>
    </>
  )
}

export default Article
