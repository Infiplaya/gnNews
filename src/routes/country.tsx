import { Loader } from '@mantine/core'
import { useParams } from 'react-router-dom'
import Feed from '../components/Feed'
import { useCountryNewsQuery } from '../hooks'

export default function CountryPage() {
    const params = useParams()
    const { data, isLoading, isError } = useCountryNewsQuery(
        params.kraj as string
    )

    if (isLoading) {
        return (
            <div
                style={{
                    display: 'flex',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingRight: 'calc(var(--mantine-navbar-width, 0px))',
                }}
            >
                <Loader />
            </div>
        )
    }

    if (isError) {
        return (
            <div
                style={{
                    display: 'flex',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingRight: 'calc(var(--mantine-navbar-width, 0px))',
                }}
            >
                Error loading data
            </div>
        )
    }

    return (
        <>
            <Feed data={data} />
        </>
    )
}
