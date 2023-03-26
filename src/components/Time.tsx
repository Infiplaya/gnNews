import { Group, Text } from '@mantine/core'
import { useState, useEffect } from 'react'

function Time() {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <Group>
            <Text size="sm">Current Time: {date.toLocaleTimeString()}</Text>
        </Group>
    )
}

export default Time
