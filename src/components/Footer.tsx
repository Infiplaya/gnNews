import { Footer, Group, Text } from '@mantine/core'
import { useNewsQuery } from '../hooks'
import Time from './Time'
import { useTranslation } from 'react-i18next'

export default function FooterComponent() {
    const { data } = useNewsQuery();
    const { t } = useTranslation()
    return (
        <Footer height={60} p="md">
            <Group
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Text size="sm">{t('news')}: {data?.articles.length}</Text>
                <Time />
            </Group>
        </Footer>
    )
}
