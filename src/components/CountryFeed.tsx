import { List, Loader, SimpleGrid } from '@mantine/core'
import { useParams } from 'react-router-dom'
import { useAppSelector, useCountryNewsQuery } from '../hooks'
import { News } from '../types/news'
import NewsCard from './NewsCard'
import NewsItem from './NewsItem'

export async function getCountryNews(kraj: string): Promise<News> {
    const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${kraj}&apiKey=${
            import.meta.env.VITE_NEWS_API_KEY
        }`
    )

    if (!response.ok) {
        throw new Error(`Something went wrong with fetching news`)
    }

    return response.json()
}

export default function CountryFeed() {
    const params = useParams()
    const { data, isLoading, isError } = useCountryNewsQuery(
        params.kraj as string
    )

    const view = useAppSelector((state) => state.view.value)

    if (isLoading) {
        return <Loader />
    }

    if (isError) {
        return <div>Error loading data</div>
    }

    return (
        <div style={{ paddingRight: '2rem', paddingLeft: '2rem' }}>
            {view === 'list' ? (
                <List spacing="xl" size="sm" center listStyleType="none">
                    {' '}
                    {data?.articles.map((article) => (
                        <List.Item key={article.title}>
                            <NewsItem article={article} />
                        </List.Item>
                    ))}
                </List>
            ) : (
                <SimpleGrid
                    cols={4}
                    spacing="lg"
                    verticalSpacing="lg"
                    breakpoints={[
                        { maxWidth: '62rem', cols: 3, spacing: 'md' },
                        { maxWidth: '48rem', cols: 2, spacing: 'sm' },
                        { maxWidth: '36rem', cols: 1, spacing: 'sm' },
                    ]}
                >
                    {data?.articles.map((article) => (
                        <NewsCard article={article} key={article.title} />
                    ))}
                </SimpleGrid>
            )}
        </div>
    )
}
