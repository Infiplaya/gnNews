import { Group, Text } from '@mantine/core'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function Time() {
    const [date, setDate] = useState(new Date())
    const { t } = useTranslation()

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <Group>
            <Text size="sm">{t('time')}: {date.toLocaleTimeString()}</Text>
        </Group>
    )
}

export default Time
