import type { ArticleType } from "../types/types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ColorText } from "../components/decoration/ColorText.tsx";
import { Unlist, Publish, Delete } from "../components/ArticleAction.tsx";
import { SuccessEvent, FailureEvent } from "../components/decoration/EventNotification.tsx";

function Admin() {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  useEffect(() => {
    fetch(`/api/articles/`)
      .then(response => response.json())
      .then(data => {setArticles(data as ArticleType[])})
      .catch(error => console.error("Error fetching article:", error));
    },
   []);

  const handleSubmit = (slug: string, status: string) => async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await fetch(`/api/article/status/${slug}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ status })
      });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error('Error updating article:', error);
      setFailure(true);
      setTimeout(() => setFailure(false), 3000);
    }
  };


  return (
    <>
      <section className="center relative mt-25 w-full h-48">
        <div className="mx-20">
          <h1 className='md:text-8xl text-4xl  text-left'>Admin</h1>
        </div>
      </section>
      <section className="relative mt-10 mx-20 prose prose-invert">
        <h2 className='text-4xl mb-2'>Rediger Artikler</h2>
        {
          articles.map((article) => (
            <div key={article.id} className='mb-10 flex flex-row justify-between items-center'>
              <Link to={`/blog/article/${article.slug}`} className='no-underline'>
                <h2 className='text-4xl mb-2'>// <ColorText text={article.title} /></h2>
                <p className='text-xl text-slate-500/30'><ColorText text={article.description} /></p>
                <p className='text-lg text-slate-500/30'>Status: {article.status}</p>
              </Link>
              <div className='flex flex-row gap-2'>
                <Link to={`/blog/edit/${article.slug}`}>
                <button className='bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 border border-amber-700 rounded transition duration-150'>
                      Edit
                </button>
                </Link>
                {(article.status === 'draft' || article.status === 'unlisted') && (
                    <Publish onClick={handleSubmit(article.slug, 'published')} />
                )}
                {(article.status === 'published' || article.status === 'hidden') && (
                  <Unlist onClick={handleSubmit(article.slug, 'unlisted')} />
                )}
                {article.status !== 'hidden' && (
                    <Delete onClick={handleSubmit(article.slug, 'hidden')} />
                )}
              </div>
            </div>
          ))
        }
      {success && <SuccessEvent text="Status ble endret!" />}
      {failure && <FailureEvent text="Status ble ikke endret!" />}
      </section>
    </>
  )
}

export default Admin
