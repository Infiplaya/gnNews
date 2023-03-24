import { Button, Flex, Image, Text } from '@mantine/core'
import { Link } from 'react-router-dom'

interface Country {
    name: string
    code: string
}

export default function CountryButton({ country }: { country: Country }) {
    return (
        <Link to={`country/${country.code.toLowerCase()}`}>
            <Button
                variant={'subtle'}
                color="indigo"
                style={{ textAlign: 'left', display: 'flex' }}
            >
                <Image
                    mr="sm"
                    src={`https://flagsapi.com/${country.code}/flat/16.png`}
                ></Image>
                <Text>{country.name}</Text>
            </Button>
        </Link>
    )
}
