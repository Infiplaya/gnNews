import { Anchor, Badge, Group, Popover, Text } from '@mantine/core'
import { Article } from '../types/news'
import dayjs from 'dayjs'

export default function NewsItem({ article }: { article: Article }) {
    return (
        <div style={{ cursor: 'pointer' }}>
            <Popover position="bottom-start" width={200} shadow="md">
                <Popover.Target>
                    <div>
                        <Text weight={500}>{article.title}</Text>
                        <Group>
                            <Text>{article.source.name}</Text>
                            <Badge color="grape">
                                {dayjs(article.publishedAt).format(
                                    'DD/MM/YYYY'
                                )}
                            </Badge>
                        </Group>
                    </div>
                </Popover.Target>
                <Popover.Dropdown>
                    <Text weight={500}>{article.author}</Text>
                    <Anchor href={article.url}>Link</Anchor>
                    <Text size="sm">{article.content}</Text>
                </Popover.Dropdown>
            </Popover>
        </div>
    )
}
