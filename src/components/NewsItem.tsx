import { Badge, Group, List, Text } from '@mantine/core'
import React from 'react'
import { Article } from '../types/news'

export default function NewsItem({article}: {article: Article}) {
  return (
    <List.Item>
        <div>
        <Text weight={500}>{article.title}</Text>
        <Group>
            <Text>{article.source.name}</Text>
            <Badge color='grape'>{article.publishedAt}</Badge>
        </Group>
        </div>
        
    </List.Item>
  )
}
