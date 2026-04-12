import { ColorText } from '../../components/decoration/ColorText.tsx';
import ReactMarkdown from 'react-markdown';
import {useState, useEffect} from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark as dark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useParams } from 'react-router-dom';
import type { ArticleType } from '../../types/types.ts';

function Article() {
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

  return (
    <>
    <article>
      <section className="center relative mt-25 w-full">
        <div className="mx-20">
            <h1 className='md:text-8xl text-4xl  text-left'><ColorText text={articleContent.title}/></h1>
            <p className='text-3xl mt-2 text-left text-slate-500/30 wrap-anywhere'><ColorText text={articleContent.description} /></p>
        </div>
      </section>
      <section className="relative mt-25 mx-20 max-w-full wrap-anywhere prose prose-invert">
        <img src="#" alt="placeholder" className='w-full rounded-lg mb-10' />
        <ReactMarkdown
        children={articleContent.content}
        components={{
      code(props: any) {
        const {children, className, node, ...rest} = props
        const match = /language-(\w+)/.exec(className || '')
        return match ? (
          <SyntaxHighlighter
            {...rest}
            PreTag="div"
            children={String(children).replace(/\n$/, '')}
            language={match[1]}
            style={dark}
          />
        ) : (
          <code {...rest} className={className}>
            {children}
          </code>
        )
      }
    }}
        />
      </section>
      </article>
    </>
  )
}

export default Article
