import { Footer, Group, Text } from '@mantine/core'
import React from 'react'
import { useQuery } from 'react-query'
import { getNews } from './Feed'
import Clock from './Time'

export default function FooterComponent() {
const {data} = useQuery('news', getNews)
  return (
    <Footer height={60} p="md">
        <Group style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <Text size="sm">
                Total News: {data?.totalResults}
            </Text>
            <Clock />
        </Group>
    </Footer>
  )
}
