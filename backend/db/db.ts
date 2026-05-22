import Database from 'better-sqlite3'
import { Kysely, sql, SqliteDialect } from 'kysely'
import { Database as DBType } from './types.js'

const nativeDb = new Database('./data/oleyat.db')

export const db = new Kysely<DBType>({
  dialect: new SqliteDialect({
    database: nativeDb,
  }),
})

export async function initDb() {
await db.schema.createTable('articles_new')
  .ifNotExists()
  .addColumn('id', 'integer', col => col.primaryKey().autoIncrement())
  .addColumn('title', 'text', col => col.notNull())
  .addColumn('description', 'text', col => col.notNull())
  .addColumn('content', 'text', col => col.notNull())
  .addColumn('slug', 'text', col => col.notNull().unique())
  .addColumn('status', 'text', col => col.notNull().defaultTo('draft'))
  .addColumn('created', 'integer', col => col.defaultTo(sql`(unixepoch())`))
  .execute();

// Kopier eksisterende data
await db.executeQuery(
  sql`INSERT INTO articles_new (id, title, description, content, slug, created) 
      SELECT id, title, description, content, slug, unixepoch(created)
      FROM articles`.compile(db)
);
// Bytt ut
await db.schema.dropTable('articles').execute();
await db.schema.alterTable('articles_new').renameTo('articles').execute();
} 