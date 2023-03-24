import { Footer, Group, Text } from '@mantine/core'
import { useQuery } from 'react-query'
import { getNews } from './Feed'
import Clock from './Time'

export default function FooterComponent() {
    const { data: newsData } = useQuery('news', getNews)
    return (
        <Footer height={60} p="md">
            <Group
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Text size="sm">News count: {newsData?.articles.length}</Text>
                <Clock />
            </Group>
        </Footer>
    )
}
