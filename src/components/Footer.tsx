import { Footer, Group, Text } from '@mantine/core'
import { useNewsQuery } from '../hooks'
import Time from './Time'

export default function FooterComponent() {
    const { data } = useNewsQuery()
    return (
        <Footer height={60} p="md">
            <Group
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Text size="sm">News count: {data?.articles.length}</Text>
                <Time />
            </Group>
        </Footer>
    )
}
