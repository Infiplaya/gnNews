import { Anchor, Badge, Card, Group, Image, Popover, Text } from '@mantine/core'
import { Article } from '../types/news'
import dayjs from 'dayjs'

export default function NewsCard({ article }: { article: Article }) {
    return (
        <div style={{ cursor: 'pointer', height: '100%' }}>
            <Popover width={200} position="bottom-start" withArrow shadow="md">
                <Popover.Target>
                    <Card
                        shadow="sm"
                        padding="lg"
                        radius="md"
                        withBorder
                        style={{ height: '100%' }}
                    >
                        <Card.Section>
                            <Image
                                src={article.urlToImage}
                                height={160}
                                alt={article.title}
                                withPlaceholder
                            />
                        </Card.Section>

                        <Group position="apart" mt="md" mb="xs">
                            <Text weight={500}>{article.title}</Text>
                            <Badge color="pink" variant="light">
                                {dayjs(article.publishedAt).format(
                                    'DD/MM/YYYY'
                                )}
                            </Badge>
                        </Group>
                        <Text size="sm" color="dimmed">
                            {article.source.name}
                        </Text>
                        <Text size="sm" color="dimmed">
                            {article.description}
                        </Text>
                    </Card>
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
