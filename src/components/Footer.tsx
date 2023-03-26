import { Footer, Group, Text } from '@mantine/core'
import { useNewsQuery } from '../hooks'
import Clock from './Time'

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
                <Clock />
            </Group>
        </Footer>
    )
}
