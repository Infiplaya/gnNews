import { Loader } from '@mantine/core'
import Feed from '../components/Feed'
import { useNewsQuery } from '../hooks'

export default function IndexPage() {
    const { data, isLoading, isError } = useNewsQuery()

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
