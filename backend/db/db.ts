import Database from 'better-sqlite3'
import { Kysely, SqliteDialect } from 'kysely'
import { Database as DBType } from './types.js'

const nativeDb = new Database('./data/oleyat.db')

export const db = new Kysely<DBType>({
  dialect: new SqliteDialect({
    database: nativeDb,
  }),
})

export async function initDb() {
  await db.schema
    .createTable('articles')
    .ifNotExists()
    .addColumn('id', 'integer', (col) => col.primaryKey().autoIncrement())
    .addColumn('title', 'text', (col) => col.notNull())
    .addColumn('description', 'text', (col) => col.notNull())
    .addColumn('slug', 'text', (col) => col.notNull().unique())
    .addColumn('content', 'text', (col) => col.notNull())
    .addColumn('created', 'datetime', (col) => col.defaultTo('CURRENT_TIMESTAMP'))
    .execute();
    
  console.log("Database er laget!");
}
