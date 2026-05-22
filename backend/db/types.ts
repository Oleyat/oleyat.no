import { Generated, ColumnType } from 'kysely'

type ArticleStatus = 'draft' | 'published' | 'unlisted' | 'hidden';

export interface ArticleTable {
  id: Generated<number>
  title: string
  slug: string
  description: string
  content: string
  created: ColumnType<number, number | undefined, number>
  status: ColumnType<ArticleStatus, ArticleStatus | undefined, ArticleStatus>
}

export interface Database {
  articles: ArticleTable
}

export default ArticleStatus;