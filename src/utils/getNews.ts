import { News } from '../types/news'

export async function getNews(): Promise<News> {
    const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=pl&pageSize=100&apiKey=${
            import.meta.env.VITE_NEWS_API_KEY
        }`
    )
    if (!response.ok) {
        throw new Error(`Something went wrong with fetching news`)
    }
    return response.json()
}
