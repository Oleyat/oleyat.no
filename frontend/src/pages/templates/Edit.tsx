import { ColorText } from '../../components/decoration/ColorText.tsx';
import ReactMarkdown from 'react-markdown';
import {useState, useEffect} from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark as dark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useParams } from 'react-router-dom';
import type { ArticleType } from '../../types/types.ts';
import TextareaAutosize from 'react-textarea-autosize';
import { SuccessEvent } from '../../components/decoration/SuccessEvent.tsx';

function Edit() {

  const [success, setSuccess] = useState(false);
  const [articleContent, setArticleContent] = useState<ArticleType | null>(null);
  const { slug } = useParams<{ slug: string }>();
  useEffect(() => {
    if (!slug) return;
    fetch(`/api/article/${slug}`)
      .then(response => response.json())
      .then(data => {setArticleContent(data as ArticleType)})
      .catch(error => console.error("Error fetching article:", error));
    },
   [slug]);

  if (!articleContent) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setArticleContent(prev => prev ? {...prev, [name]: value} : null);
  }

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch(`/api/article/${slug}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(articleContent)
      });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error('Error updating article:', error);
    }
  };


  return (
    <>
    <form onSubmit={handleSubmit} className="center relative my-25 xl:mx-30 border-solid border-5 border-slate-500/30 rounded-lg mx-5 h-9/10">
      <section className='py-5'>
        <div className="mx-5 flex flex-col gap-2">
            <div className='flex flex-row w-full justify-between justify-items-center items-center'>
            <label htmlFor="title" className='text-2xl'>title</label>
            <input type="submit" value="Save" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded float-right'/>
            </div>
            <input id="title" type="text" name="title" value={articleContent.title} onChange={handleChange} className='md:text-8xl text-4xl text-left border border-2 border-slate-500/30 rounded-lg p-2'/>
            <label htmlFor="description" className='w-max text-2xl' >description</label>
            <input id="description" type="text" name="description" value={articleContent.description} onChange={handleChange} className='text-3xl mt-2 text-left wrap-anywhere border border-2 border-slate-500/30 rounded-lg p-2'/>
        </div>
      </section>
      <section className="relative mt-25 py-5 mx-5 max-w-full wrap-anywhere prose prose-invert">
        <img src="#" alt="placeholder" className='w-full rounded-lg mb-10' />
        <label htmlFor="content" className='w-full text-2xl'>content</label>
        <TextareaAutosize name="content" value={articleContent.content} onChange={handleChange} minRows={10} className='text-l mt-2 text-left wrap-anywhere w-full border border-2 border-slate-500/30 rounded-lg p-2'/>
      </section>
      </form>
      {success && <SuccessEvent text="Artikel ble lagret!" />}
    </>
  )
}

export default Edit
