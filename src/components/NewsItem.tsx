import { Anchor, Badge, Group, List, Popover, Text } from '@mantine/core'
import React from 'react'
import { Article } from '../types/news'

export default function NewsItem({article}: {article: Article}) {
  return (
    <div style={{cursor: 'pointer'}}>
    <Popover position="bottom-start" width={200} shadow="md">
      <Popover.Target>
    <List.Item>
        <div>
        <Text weight={500}>{article.title}</Text>
        <Group>
            <Text>{article.source.name}</Text>
            <Badge color='grape'>{article.publishedAt}</Badge>
        </Group>
        </div>
    </List.Item>
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
