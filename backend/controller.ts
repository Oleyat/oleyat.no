import { db } from "./db/db.js";


export async function getArticle(slug: string) {
    const article = await db
    .selectFrom('articles')
    .selectAll()
    .where('slug', '=', slug)
    .executeTakeFirst()
    return article;
}

export async function getAllArticles() {
    const articles = await db
    .selectFrom('articles')
    .selectAll()
    .execute();
    return articles;
}

export async function postArticle(title: string, description: string, slug: string, content: string) {
    await db
    .insertInto('articles')
    .values({
        title: title,
        description: description,
        slug: slug,
        content: content
    })
    .execute();
}

export async function deleteArticle(id: number) {
    await db
    .deleteFrom('articles')
    .where('id', '=', id)
    .execute()
}