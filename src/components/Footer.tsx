import { Footer, Group, Text } from '@mantine/core'
import { useCountryNewsQuery, useNewsQuery } from '../hooks'
import Time from './Time'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

export default function FooterComponent() {
    const params = useParams()
    const { data: newsData } = useNewsQuery()
    const { data: countryNewsData } = useCountryNewsQuery(params.kraj as string)
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
                <Text size="sm">
                    {t('news')}:{' '}
                    {countryNewsData?.totalResults
                        ? countryNewsData.totalResults
                        : newsData?.totalResults}
                </Text>
                <Time />
            </Group>
        </Footer>
    )
}
