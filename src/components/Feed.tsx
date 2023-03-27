import { List, SimpleGrid } from '@mantine/core'
import { useAppSelector } from '../hooks'
import { News } from '../types/news'
import NewsCard from './NewsCard'
import NewsItem from './NewsItem'

export default function Feed({ data }: { data: News | undefined }) {
    const view = useAppSelector((state) => state.view.value)

    return (
        <div style={{ paddingRight: '2rem', paddingLeft: '2rem' }} role="feed">
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
                    style={{
                        gridAutoRows: '1fr',
                    }}
                >
                    {data?.articles.map((article) => (
                        <NewsCard article={article} key={article.title} />
                    ))}
                </SimpleGrid>
            )}
        </div>
    )
}
