import { Generated, ColumnType } from 'kysely'

export interface ArticleTable {
  id: Generated<number>
  title: string
  slug: string
  description: string
  content: string
  created: ColumnType<Date, string | undefined, never>
}

export interface Database {
  articles: ArticleTable
}