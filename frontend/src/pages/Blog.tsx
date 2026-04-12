import { ColorText } from '../components/decoration/ColorText.tsx';
import type { ArticleType } from '../types/types.ts';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'


function Blog() {
  const [articles, setArticles] = useState<ArticleType[]>([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/articles/`)
      .then(response => response.json())
      .then(data => {setArticles(data as ArticleType[])})
      .catch(error => console.error("Error fetching article:", error));
    },
   []);
  
  return (
    <>
      <section className="center relative mt-25 w-full h-48">
        <div className="mx-20">
            <h1 className='md:text-8xl text-4xl  text-left'>blog</h1>
            <p className='text-3xl mt-2 text-left text-slate-500/30'><ColorText text={"trykk på en artikkel for å se lese mer"} />
            </p>

        </div>
      </section>
      <section className="relative mt-10 mx-20 prose prose-invert">
        {articles.length === 0 ? (
          <p className='text-3xl text-slate-500/30'><ColorText text={"ingen artikler funnet"} /></p>
        ) : (
          articles.map((article) => (
            <div key={article.id} className='mb-10'>
              <Link to={`/blog/article/${article.slug}`} className='no-underline'>
                <h2 className='text-4xl mb-2'>// <ColorText text={article.title} /></h2>
                <p className='text-xl text-slate-500/30'><ColorText text={article.description} /></p>
              </Link>
            </div>
          ))
        )}
      </section>
    </>
  )
}

export default Blog
